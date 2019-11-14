import React, { Component } from 'react'
import routes from './config/routes'
//引入路由
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
//引入NotMatch组件
import NotMatch from './components/not-match/NotMatch'
//引入外面的大的组件
import BasicLayout from './components/basic-layout/BasicLayout'
//引入Login
import Login from './containers/Login/Login'



class App extends Component {

  render() {

    return (
      <Router>

        <Switch>
          <Route path='/Login' component={Login} />
          <BasicLayout>
            <Switch>
              {
                routes.map((route, index) => (<Route key={index} {...route} />))
              }
              <Route component={NotMatch} />
            </Switch>
          </BasicLayout>
        </Switch>

      </Router>
    )
  }
}
export default App;