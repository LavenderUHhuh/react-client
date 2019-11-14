import React, { Component } from 'react'

class App extends Component {
  //设计状态数据
  state = {
    name: '', //存储的是git上排名前面的技术的名字
    url: ''  //存储的是git上排名前面的技术的名字
  }
  //界面渲染完毕之后
  componentDidMount() {
    const url = `https://api.github.com/search/repositories?q=r&sort=stars`
    //发送请求
    fetch(url)
      .then(function (response) {
        //响应的数据
        if (response.ok) {
          return response.json()
        } else {
          throw new ErrorEvent('请求出错了:' + response.status)
        }
      })
      .then((data) => {
        //console.log('你好啊')
        const result = data
        //
        const user = result.items[0]
        const name = user.name
        const url = user.html_url

        //更新状态数据
        this.setState({
          name,
          url
        })
      })
      .catch(function (error) {
        console.log('请求失败:', error)
      })

  }

  render() {
    //获取状态数据
    const { name, url } = this.state
    //判断-状态数据是否有数据，如果没有数据就显示loading界面，如果有数据，那么久显示数据的界面
    if (!name) {
      return (
        <h1>loading...</h1>
      )
    } else {
      return (
        <h1>most star is <a href={url}>{name}</a></h1>
      )
    }

  }
}
export default App;