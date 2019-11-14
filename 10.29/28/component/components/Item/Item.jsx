import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Item.css'

export default class Item extends Component {
  //限定数据的类型及是否是必须的
  static propTypes={
    comment:PropTypes.object.isRequired,
    deleteComment:PropTypes.func.isRequired,
    index:PropTypes.number.isRequired
  }
//删除操作
del=()=>{
  if(window.confirm('您确定删除吗')){
    this.props.deleteComment(this.props.index)
  }
}

  render() {
    //解构出来
    const {comment}=this.props
    return (
      <li className="list-group-item">
            <div className="handle">
              <a href="###" onClick={this.del}>删除</a>
            </div>
            <p className="user"><span >{comment.name}</span><span>说:</span></p>
            <p className="centence">{comment.content}</p>
          </li>
    )
  }
}
