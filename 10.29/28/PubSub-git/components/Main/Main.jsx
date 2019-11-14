import React, { Component } from 'react'
//引入组件

import axios from 'axios'
import  PubSub from 'pubsub-js'
import './Main.css'
export default class Main extends Component {
  state = {
    firstView: true,  //默认显示第一个界面
    loading: false,    //发送请求的时候显示的第二个界面
    users: [],    //用来存储请求之后的用户信息对象的
    errorMsg: ''   //用来存储错误信息的


  }
  //什么时候订阅消息
  componentDidMount() {
    //msg-消息的名字
    //data-发布消息的时候传入的数据

    PubSub.subscribe('search', async (msg, searchName) => {
      const url = `https://api.github.com/search/users?q=${searchName}`
      this.setState({

        firstView: false,
        loading: true
      })
      //直接获取response
      try {
        //发送异步请求
        const response = await axios.get(url)
        //获取到响应的数据
        const result = response.data
        const users = result.items.map((user, index) => ({
          name: user.login,
          avatar_url: user.avatar_url,
          html_url: user.html_url
        }))


        //更新数据
        this.setState({
          loading: false,
          users
        })
        console.log(users)
      }
      catch (error) {
        this.setState({
          loading: false,
          errorMsg: '请求失败:' + error
        })
      }
    })


  }

  render() {
    const { firstView, loading, users, errorMsg } = this.state;

    if (firstView) {
      return <h1>请输入 搜索的内容</h1>
    } else if (loading) {
      return <h1>正在请求中，请稍后</h1>
    } else if (errorMsg) {
      return <h1>{'请求失败:' + errorMsg}</h1>
    } else {
      return (
        <div className="row" >
          {
            users.map((user, index) => {
              return (
                <div className="card" key={index}>
                  <a href={user.html_url}>
                    <img src={user.avatar_url} alt={user.name} style={{ width: 100 }} />
                  </a>
                  <p className="card-text">{user.name}</p>
                </div>
              )
            })
          }
        </div>

      )
    }
  }
}
