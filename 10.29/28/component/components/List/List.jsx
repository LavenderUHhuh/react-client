import React, { Component } from 'react'
//引入propTypes
import PropTypes from 'prop-types'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
   //限定数据的类型及是否是必须的
   static propTypes ={
     comments:PropTypes.array.isRequired,
     deleteComment:PropTypes.func.isRequired
   }
  render() {
      //从props中获取数据
      const {comments,deleteComment}=this.props
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display: 'none'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment,index)=><Item comment={comment} key={comment.id} deleteComment={deleteComment} index={index}/>)
          }
        </ul>
      </div>
    )
  }

}
