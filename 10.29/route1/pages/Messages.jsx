import React, { Component } from 'react'

//引入路由
import  { Link,Route } from 'react-router-dom'
//引入组件
import MessageDetail from './MessageDetail.jsx.js';

 class Messages extends Component {
  //默认没有数据
  state={
    messages:[]
  }
  //过来一会才有的数据
  componentDidMount(){
    //定时器
    setTimeout(()=>{
      //设置messages的数据
      const messages=[
        {id:1,title:'message---001'},
        {id:2,title:'message---002'},
        {id:3,title:'message---003'},
      ]

      this.setState({
        messages
      })
    },800);
  }
  //编程式的路由
  pushDetail=(id)=>{
    //push带历史记录的层层返回
    this.props.history.push(`/home/messages/${id}`)
  }
  replaceDetail=(id)=>{
    //不带历史记录，直接回退到最外层
    this.props.history.replace(`/home/messages/${id}`)
  }
  


  render() {
    const {messages}=this.state
    return (
      <div>
        <ul>
          {
            messages.map((m,index)=>(
              /*通过id来获取唯一的值*/
              <li key={m.id}>
                  {/*声明式路由*/}
                <Link replace to={`/home/messages/${m.id}`}>{m.title}</Link>
                <button onClick={()=>(this.pushDetail(m.id))}> push查看</button>
                <button onClick={()=>(this.replaceDetail(m.id))}> replace查看</button>
              </li>
            ))
          }
        </ul>
        <button onClick={()=>(this.props.history.goBack())}>返回</button>
        <hr/>
        {/*编程式路由*/}
        <Route path='/home/messages/:id' component={MessageDetail}></Route>
        
      </div>
    )
  }
}
export default Messages;