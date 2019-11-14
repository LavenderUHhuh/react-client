import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Search.css'
class Search extends Component {
  //限定传入过来的数据的类型及是否是必须的
  static PropTypes={
    search:PropTypes.func.isRequired
  }
  //搜索操作
  search=()=>{
    //获取文本框的数据
    const searchName=this.refs.content.nodeValue.trim()
    if(searchName){
      this.props.search(searchName)
    }
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref="content" />
          <button>Search</button>
        </div>
      </section>

    )
  }
}
export default Search;