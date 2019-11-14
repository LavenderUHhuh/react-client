import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import NotMatch from '../../components/not-match/NotMatch'

function WithCheckLogin(WrappedComponent) {
  //不是路由组件，所有没有location-pathname
  return connect((state) => ({ token: state.user.token, menus: state.user.user.menus }), null)(withRouter(class extends Component {
    static displayname = `WrappedComponent(${WrappedComponent.displayname || WrappedComponent.name || 'Component'})`
    //验证功能
    //如果地址是/login，并且token存在，去/--首页

    render() {
      const { token, ...rest } = this.props
      const { location: { pathname } } = rest


      if (pathname === '/login' && token) return <Redirect to='/' />
      if (pathname !== '/login') {
        console.log(this.props.menus)
        //调整localhost跳转不匹配路径
        if (!token) return <Redirect to='/login' />
        if (!this.props.menus.includes(pathname)) {
          return <WrappedComponent {...rest}><NotMatch /></WrappedComponent>
        }
      }



      return <WrappedComponent {...rest} />

    }
  }))



}



export default WithCheckLogin