//引入react
import React,{Component} from 'react'

class Counter extends Component {

  //加的操作
  /* increment = () => {

    //获取数字
    const value = this.refs.content.value * 1
    this.props.increment(value)
  } */
  increment = () => {
    // 获取数字
    const value = this.refs.content.value * 1
    this.props.increment(value)


  }
  //减得操作
  decrement = () => {

    //获取数字
    const value = this.refs.content.value * 1
    this.props.decrement(value)

  }
  //奇数的时候加
  incrementIfOdd = () => {

    //获取数字
    const value = this.refs.content.value * 1

    //判断

    if (this.props.number % 2 !== 0) {
      this.props.increment(value)
    }
  }
  //异步的加
  incrementAsync = () => {

    //获取数字
    const value = this.refs.content.value * 1
    //异步操作
    this.props.incrementAsync(value)
  }

  render() {
    const { number } = this.props
    console.log(this)
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
export default Counter