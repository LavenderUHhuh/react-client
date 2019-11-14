import React, { Component } from 'react'


import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function WithCheckLogin(WrappedComponent) {
  return connect((state) => ({ token: state.user.token }), null)(withRouter(class extends Component {
    static displayname = `WrappedComponent(${WrappedComponent.displayname || WrappedComponent.name || 'Component'})`
    //验证功能
    //如果地址是/login，并且token存在，去/--首页
    render() {
      const { token, ...rest } = this.props
      const { location: { pathname } } = rest
      
      
      if (pathname === '/login' && token) return <Redirect to='/' />
      if (pathname !== '/login' && !token) return <Redirect to='/login' />
      //if (pathname !== '/login' && !token) return <Redirect to='/login' />
      return <WrappedComponent {...rest} />

    }
  }))



}



export default WithCheckLogin