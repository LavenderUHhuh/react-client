import React, { Component } from 'react'
//引入组件
import Add from './components/Add/Add'
import List from './components/List/List'
//引入css文件
import './App.css'

export default class App extends Component {
  //获取数据状态
  state = {
    comments: [
      { id: 1, name: '难哥', content: '真香' },
      { id: 2, name: '文星', content: '这么刺激的吗' },
      { id: 3, name: '志强', content: '真好困啊' },
      { id: 4, name: '俊煌', content: '这么爽' }
    ]
  }

  //用来添加数据的操作的回调
  addComment = (comment) => {
    //获取数组
    const { comments } = this.state
    //调用数组的方法，向数组中添加数据
    //更新状态
    this.setState({
      comments: [comment, ...comments]
    })
  }

  deleteComment = (index) => {
    //先获取数组
    const { comments } = this.state
    //更新状态
    this.setState({
      comments: comments.filter((c, i) => i !== index)
    })
  }

  render() {
    //获取数组数据
    const { comments } = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment} />
          <List comments={comments} deleteComment={this.deleteComment} />
        </div>
      </div>
    )
  }
}
