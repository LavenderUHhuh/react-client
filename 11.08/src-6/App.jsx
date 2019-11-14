import React, { Component, Suspense } from 'react'
import routes from './config/routes'
//引入路由
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//引入NotMatch组件
import NotMatch from './components/not-match/NotMatch'
//引入外面的大的组件
import BasicLayout from './components/basic-layout/BasicLayout'
//引入Login
import Login from './containers/Login/Login'

//引入旋转的组件
import { Spin } from 'antd'

class App extends Component {

  render() {

    return (
      <Suspense fallback={<Spin size="large" />}>
        <Router>

          <Switch>
            <Route path='/login' component={Login} />
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

      </Suspense>

    )
  }
}
export default App;