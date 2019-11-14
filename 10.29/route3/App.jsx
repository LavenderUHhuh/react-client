import React, { Component } from 'react'
//引入相关的路由组件
import {BrowserRouter,HashRouter,Switch,NavLink,Link,Route,Redirect} from 'react-router-dom'
//引入组件
import About from './pages/About'
import Home from './pages/Home'
export default class APP extends Component {
  render() {

    return (
       <BrowserRouter>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 使用路由组件 */}
                <Switch>
                  <Route path="/about" exact component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                  <Redirect to="/about"></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
   
    )
  }
}
