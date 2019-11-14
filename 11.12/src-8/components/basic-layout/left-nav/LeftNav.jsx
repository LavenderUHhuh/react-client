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

@connect(null, { updateTitle })
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

  render() {
    //调用方法显示菜单
    const menus = this.createMenus()
    //获取当前组件的相对的路径，如果要使用location对象，当前的组件要么有location属性，要么当前的组件应该是一个路由组件
    let { pathname } = this.props.location
    pathname=pathname.startsWith('/product')?'/product':pathname
    //defaultSelectedKeys设置默认的菜单被选中（key的属性值，遍历生成菜单的时候，key属性值都是要读取出来的，路径
    //defaultOpenKeys=一级菜单的key--一级菜单就会被展开

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