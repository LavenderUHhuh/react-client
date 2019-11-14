import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Add.css'
class Add extends Component {
  //数据类型的限制
  static propTypes = {
    addComment: PropTypes.func.isRequired
  }
  //添加操作
  add = () => {
    //获取用户名级评论内容-》获取文本框中的数据（文本框是虚拟的标签）
    const userName = this.refs.userName.value.trim()
    const content = this.refs.content.value.trim()
    //判断数据是否为空
    if (!userName || !content) {
      return
    }
    //产生对象
    const comment = {
      id: Date.now(),
      userName,
      content
    }
    //调用父级组件传入的函数，并且传入参数-》对象
    this.props.addComment(comment)
    
  }

  render() {
    
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref='name'/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref='content'></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button"  className="btn btn-default pull-right">提交</button>
            </div>
          </div>
        </form>
      </div>

    )
  }
}

export default Add;