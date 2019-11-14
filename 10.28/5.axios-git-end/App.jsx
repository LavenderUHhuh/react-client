import React, { Component } from 'react'
import Search from './components/Search/Search.jsx.js.js'
import Main from './components/Main/Main.jsx.js.js'

import './App.css'
class App extends Component {
  state={
    searchName:''//搜索的内容
  }
  //搜索操作的方法
  search =(searchName)=>{
    //更新状态数据
    this.setState({
      searchName
    })
  }
  render() {
    const {searchName}=this.state
    return (
      <div className="container">   
      < Search search={this.search} />
      <Main searchName={searchName} />
     </div>
    )
  }
}
export default App;