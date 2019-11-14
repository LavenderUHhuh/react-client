import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item/Item.jsx.js'
//引入樣式
import './List.css'
class List extends Component {
  //限定数据的类型及是否是必须的
  static propTypes = {
    comments: PropTypes.array.isRequired,
    removeComment: PropTypes.func.isRequired
  }
  render() {
    //从props获取数据
    const { comments } = this.props
    console.log(comments)
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{ display: 'none' }}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment, index) => <Item key={index} comment={comment} removeComment={this.props.removeComment} index={index} />)
          }
        </ul>
      </div>

    )
  }
}
export default List;