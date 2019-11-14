import React, { Component } from 'react'
import{connect} from 'react-redux'
import {updateSearch} from '../../redux/action-creators'
import './Search.css'
class Search extends Component {
  //限定传入过来的数据的类型及是否是必须的
  
  //搜索操作
  search=()=>{
    //获取文本框的数据
    const search=this.refs.content.value.trim()
    if(search){
      console.log(search)
      this.props.updateSearch(search)
    }
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref="content" />
          <button onClick={this.search}>Search</button>
        </div>
      </section>

    )
  }
}
export default connect(
  null,
  {
    updateSearch
  }
)(Search)