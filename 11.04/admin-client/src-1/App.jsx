import React, { Component } from 'react'
import routes from'./config/routes'
//引入路由
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'



class App extends Component {
 
  render() {
   
    return (
      <Router>
        {
          routes.map((route,index)=>(<Route key={index} {...route}/>))
        }
      </Router>
    )
  }
}
export default App;