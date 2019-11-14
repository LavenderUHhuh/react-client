import React, { Component } from 'react';


class App extends Component {
  state = {
    number: 0
  }
  //加的操作
  increment = () => {
    const { number } = this.state
    //获取数字
    const value = +this.refs.content.value
    this.setState({
      number: number + value

    })
  }
  //减得操作
  decrement = () => {
    const { number } = this.state
    //获取数字
    const value = +this.refs.content.value
    this.setState({
      number: number - value

    })
  }
  //奇数的时候加
  incrementIfOdd = () => {
    const { number } = this.state
    //获取数字
    const value = +this.refs.content.value

    //判断
    if (number % 2 !== 0) {
      this.setState({
        number: number + value
      })
    }
  }
  //异步的加
  incrementAsync = () => {
    const { number } = this.state
    //获取数字
    const value = +this.refs.content.value
    setTimeout(() => {
      this.setState({
        number: number + value
      })
    }, 1000);
  }

  render() {
    const { number } = this.state
    return (
      <div>
        <h2>点击了{number}次</h2>
        <select ref="content">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>

        </select><br />
        <button onClick={this.increment}>increment</button>&nbsp;
        <button onClick={this.decrement}>decrement</button>&nbsp;
        <button onClick={this.incrementIfOdd}>incrementIfOdd</button>&nbsp;
        <button onClick={this.incrementAsync}>incrementAsync</button>
      </div>
    );
  }
}

export default App;