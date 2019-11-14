import React, { Component } from 'react';
// 引入prop-types
 import PropTypes from 'prop-types'
// 引入样式
import './Item.css'
class Item extends Component {
  // 限定数据的类型及是否是必须的
  static propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }
  // 删除操作
  remove = () => {
    if (window.confirm('您确定删除')) {
      // 调用父级组件传过来的删除方法
      this.props.deleteComment(this.props.index)
    }
  }
  


  render(){
    const {comment}=this.props
    console.log(comment)
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="###" onClick={this.remove}>删除</a>
        </div>
        <p className="user"><span >{comment.name}</span><span>说:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    )
  }
  
}

   
  


export default Item;


// 断言