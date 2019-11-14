import React, { Component } from 'react'
//引入路由
import { Link, Route } from 'react-router-dom'
//引入组件
import MessageDetail from './MessageDetail'


export default class Messages extends Component {
  //默认没有数据
  state = {
    messages: []
  }
  //过了一会才有的数据
  componentDidMount() {

    //设置messages的数据
    const messages = [
      { id: 1, title: 'message--001' },
      { id: 2, title: 'message--002' },
      { id: 3, title: 'message--003' },
    ]
    this.setState({

      messages
    })

  }
  //编程式的路由
  pushDetail = (id) => {
    this.props.history.push(`/home/messages/${id}`)
  }
  replaceDetail = (id) => {
    this.props.history.replace(`/home/messages/${id}`)
  }
  render() {
    const { messages } = this.state
    return (
      <div>
        <ul>
          {
            messages.map((m, index) => (
              <li key={m.id}>
                <Link replace to={`/home/messages/${m.id}`}>{m.title}</Link>
                <button onClick={() => (this.pushDetail(m.id))}>push查看</button>
                <button onClick={() => (this.replaceDetail(m.id))}>replaceDetail查看</button>
              </li>
            ))
          }
        </ul>
        <button onClick={() => this.props.history.goBack()}>返回</button>
        <hr />
        <Route path='/home/messages/:id' component={MessageDetail}></Route>

      </div>
    )
  }
}
