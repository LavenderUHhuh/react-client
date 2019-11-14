import React, { Component } from 'react'


export default class App extends Component {
  //设计状态数据

  state = {
    name: '',//存储的是git上排名最前面的技术的名字
    url: ''  //存储的是git上排名最前面的技术的连接地址
  }
  //界面渲染完毕之后
  componentDidMount() {
    const url = `https://api.github.com/search/repositories?q=r&sort=stars`
    //发送请求
    fetch(url)
      .then(function (response) {
        //响应数据
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('请求出错了:' + response.status)
        }

      }).then((data) => {
        const result = data
        //从响应的数据中找数组中的第一个数据
        const user = result.items[0]
        const name = user. name
        const url = user.html_url
        //更新状态数据
        this.setState({
          name,
          url
        })
      })
      .catch(function (error) {
        console.log('请求失败:' + error)
      })
  }
  render() {
    //获取状态数据
    const { name, url } = this.state
    //判断-状态是否有数据
    if (!name) {
      return (
        <h1>Loading...</h1>
      )
    } else {
      return (

        <h1>most star is<a href={url}>{name}</a></h1>
      )
    }

  }
}
