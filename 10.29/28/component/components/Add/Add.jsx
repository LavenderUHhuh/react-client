import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Add.css'
export default class Add extends Component {
  //数据类型的限制
  static propTypes = {
    addComment: PropTypes.func.isRequired
  }
  //添加操作
  add = () => {
    const name = this.refs.userName.value.trim()
    const content = this.refs.content.value.trim()

    //判断数据是否为空
    if (!name || content) {
      return
    }
    //产对象
    const comment = {
      id: Date.now(),
      name,
      content
    }
    //调用父级组件传入的函数，并且传入参数
    this.props.addComment(comment)
    this.refs.userName.value = ''
    this.refs.content.value = ''

  }
  render() {
    return (

      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
