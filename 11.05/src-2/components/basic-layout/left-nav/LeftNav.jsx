import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import menus from '../../../config/menus.js';
//引入菜单数据
import {withRouter,Link} from 'react-router-dom'

const { SubMenu } = Menu;
@withRouter
class LefNav extends Component {
  //创建一级菜单的
  createCmenus = (menu) => {
    return (
      <Menu.Item key={menu.key}>
        <Link to={menu.icon}>
          <Icon type={menu.icon} />
          <span>{menu.title}</span>
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
                <span>{menu.title}</span>
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
          if (cMenu.key === pathname) {
            //获取改二级菜单的一级菜单
            return menu.key
          }
        }
      }
    }
  }
  render() {
    //调用方法显示菜单

    const menus = this.createMenus()

    //获取当前组件的相对的路径，如果要使用location对象，当前的组件要么有location属性，要么当前的组件应该是一个路由组件
    const { pathname } = this.props.location
    //defaultSelectedKeys设置默认的菜单被选中（key的属性值，遍历生成菜单的时候，key属性值都是要读取出来的，路径
    //defaultOpenKeys=一级菜单的key--一级菜单就会被展开

    const openKey = this.getOpenkey(pathname)
    return (
      <Menu theme="dark" defaultSelectedKeys={[pathname]} defaultOpenKeys={[openKey]} mode="inline">
        {
          menus
        }
      </Menu>

    )
  }
}
export default  LefNav