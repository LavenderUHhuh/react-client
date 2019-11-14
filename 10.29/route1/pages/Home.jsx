import React, { Component } from 'react'

//引入路由
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
//引入路由组件
import News from './News'
import Messages from './Messages'

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Home内容</h1>
        <ul className="nav nav-tabs">

          {/*路由连接*/}
          <li>
            <NavLink to="/home/news" className="list-group-item">News</NavLink>

          </li>
          <li>
            <NavLink to="/home/messages" className="list-group-item">Messages</NavLink>

          </li>
        </ul>
        {/*注册路由*/}
        <Switch>
          <Route path="/home/news" component={News}></Route>
          <Route path="/home/messages" component={Messages}></Route>
          <Redirect to="/home/news"></Redirect>
        </Switch>
      </div>
    )
  }
}





export default Home;
