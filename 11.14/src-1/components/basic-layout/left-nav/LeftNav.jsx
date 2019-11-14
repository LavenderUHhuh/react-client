import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import menus from '../../../config/menus.js';
//引入菜单数据
import { withRouter, Link } from 'react-router-dom'
//引入国际化的包
import { withTranslation } from 'react-i18next'
//引入connect高阶组件
import { connect } from 'react-redux'
//引入action-creators------updateTitle
import { updateTitle } from '../../../redux/ation-creators'


const { SubMenu } = Menu;

@connect(state=>({menus:state.user.user.menus}), { updateTitle })
@withTranslation()
@withRouter
class LefNav extends Component {
  //创建一级菜单的
  createCmenus = (menu) => {
    return (
      <Menu.Item key={menu.key}>
        <Link to={menu.key}>
          <Icon type={menu.icon} />
          <span>{this.props.t(menu.title)}</span>
        </Link>
      </Menu.Item>
    )
  }
  //创建菜单的
  createMenus = () => {
    return menus.map(menu => {
      //有没有二级菜单
      if (menu.children) {
        return (
          <SubMenu
            key={menu.key}
            title={
              <span>
                <Icon type={menu.icon} />
                {/* this.props.t翻译 */}
                <span>{this.props.t(menu.title)}</span>

              </span>
            }
          >
            {
              menu.children.map(cMenu => {
                //二级的菜单
                return this.createCmenus(cMenu)
              })
            }
          </SubMenu>

        )
      } else {
        //一级菜单
        return this.createCmenus(menu)
      }

    })
  }
  //根据当前的路径，获取这个二级菜单所在的以及菜单的key
  getOpenkey = (pathname) => {
    for (let i = 0; i < menus.length; i++) {
      const menu = menus[i]
      //判断当前的这个菜单有没有children
      if (menu.children) {
        //此时说这个menu就是一个以及菜单，但是这个一个菜单有二级的菜单
        for (let j = 0; j < menu.children.length; j++) {
          const cMenu = menu.children[j]
          if (pathname.startsWith(cMenu.key)) {
            //获取改二级菜单的一级菜单
            return menu.key
          }
        }
      }
    }
  }
  //点击左侧菜单按钮，获取当前选中的菜单的title
  //方法--根据路径找对应title修改
  findTitleBykey = (pathname) => {
    const menus=this.checkMenus()
    //meus中找
    for (let i = 0; i < menus.length; i++) {
      const menu = menus[i]
      //判断当前的对象中是否有字的对象

      if (menu.children) {
        //继续遍历子级的菜单
        for (let j = 0; j < menu.children.length; j++) {
          const cMenu = menu.children[j]
          if (pathname.startsWith(cMenu.key)) {
            return cMenu.title
          }
        }
      }else{
        if(menu.key===pathname){
          return menu.title
        }
      }
    }
    return '404'
  }
  //获取首页默认值
  componentDidMount(){
    //获取路径
    const {pathname}=this.props.location
    //根据路径找对应的title
    const title=this.findTitleBykey(pathname)
    //更新redux中的title数据
    this.props.updateTitle(title)
  }


  //选中的时候更新对应的title
  selectItme=({key})=>{
    //文字首页
    const title=this.findTitleBykey(key)
    //更新操作-redux-action-creators中的updateTitle
    this.props.updateTitle(title)
  }
//效验menus，登录的用户输入路径的时候按权限跳转，如果没有这个权限则不跳转
checkMenus=()=>{
  return menus.reduce((prev,current)=>{
    //config目录中的menus.js文件中暴露出来的是menus数组--这个数组里的每个元素都是对象
    //当前登录的用户对象中也有一个menu数组，每一个元素都是一个字符串
    //current--对象--每个menu对象,current.key是每一个字符串的路径，此时登录的用户的menus数组中有当前的路径
    //includse用来判断一个数组是否包含一个指定的值，根据情况，返回一个布尔值
    const result=this.props.menus.includes(current.key)
    if(result){
      prev.push(current)
    }else if(current.children){
      const cMenus=current.children.filter(menu=>this.props.menus.includes(menu.key))
      if(cMenus.length){
        prev.push({...current,children:cMenus})
      }
    }
    return prev
  },[])
}
  render() {
    //调用方法显示菜单
    const newMenus=this.checkMenus()
    const menus = this.createMenus(newMenus)
    //获取当前组件的相对的路径，如果要使用location对象，当前的组件要么有location属性，要么当前的组件应该是一个路由组件
    let { pathname } = this.props.location
    pathname=pathname.startsWith('/product')?'/product':pathname
    //defaultSelectedKeys设置默认的菜单被选中（key的属性值，遍历生成菜单的时候，key属性值都是要读取出来的，路径
    //defaultOpenKeys=一级菜单的key--一级菜单就会被展开
    //每个标签中存储的都是路径
    
    const openKey = this.getOpenkey(pathname)
    return (
      <Menu theme="dark" defaultSelectedKeys={[pathname]} defaultOpenKeys={[openKey]} mode="inline" onSelect={this.selectItme}>
        {
          menus
        }
      </Menu>

    )
  }
}
export default LefNav