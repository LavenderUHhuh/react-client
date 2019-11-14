import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './Search.css'
export default class Search extends Component {
  
  //搜索方法
  search=()=>{
    //获取到输入的搜索内容
    const search=this.refs.content.value.trim()
    //调用父级组件传过来的searach方法
    if(search){
      PubSub.publish('search',search)
    }
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref='content'/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
      
    )
  }
}
