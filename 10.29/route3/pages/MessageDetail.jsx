import React, { Component } from 'react'
//数组数据
const messageDetails = [
  { id: 1, title: 'message001', content: 'detail--01' },
  { id: 2, title: 'message002', content: 'detail--02' },
  { id: 3, title: 'message003', content: 'detail--03' },
]

export default class MessageDetail extends Component {
  state = {
    detail: {}
  }

  //这个生命周期函数只执行一次
  componentDidMount() {
    const id = +this.props.match.params.id
    //在数组中查找数据
    this.getDetailById(id)
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.match.params.id)
    const id = +nextProps.match.params.id
    this.getDetailById(id)
  }
  //封装的函数
  getDetailById = (id) => {
    //在数组中查找数据
    
      const detail = messageDetails.find((m) => m.id === id)
      //更新数据
      this.setState({
        detail
      })
   

  }
  render() {
    const { detail } = this.state
    return (
      <div>
        <ul>
          <li>id:{this.props.match.params.id}</li>
          <li>title:{detail.title}</li>
          <li>content:{detail.content}</li>
        </ul>
      </div>
    )
  }
}
