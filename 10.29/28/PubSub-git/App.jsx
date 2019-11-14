import React, { Component } from 'react'
//引入组件
import Search from './components/Search/Search'
import Main from './components/Main/Main'
export default class App extends Component {
 
  render() {
    return (
      <div className="container">
        <Search />
        <Main />
     </div>
      )
  }
}
