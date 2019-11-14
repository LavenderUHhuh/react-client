import React, { Component } from 'react'
import { Button,Radio,Icon } from 'antd';

import {Layout} from 'antd'
//引入样式
import './HeaderMain.less'
const {Header}=Layout
class HeaderMain extends Component {
  render() {
    return (
      <Header style={{ background: '#fff', padding: 0 }} className='header-main'>
        <div className="header-top">
        <Button size='small'><Icon type="fullscreen" /></Button>
        <Button size='small' className="header-english">English</Button>
        <span>欢迎,xxx</span>
        <Button type="link">退出</Button>
        </div>
        <div className="header-content">
          <div className="header-left">首页</div>
          <div className="header-right">2019-11-11</div>
        </div>
      </Header>

    )
  }
}
export default HeaderMain
