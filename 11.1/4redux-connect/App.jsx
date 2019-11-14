import React, { Component } from 'react'
//引入react-redux
import {connect} from 'react-redux'



//引入action对象
import{increment,decrement} from './redux/action-creator'


class App extends Component {
 
  //加的操作
  increment = () => {
   
    //获取数字
    const value = this.refs.content.value*1
    this.props.increment(value)
  }
  //减得操作
  decrement = () => {
    
    //获取数字
    const value = this.refs.content.value*1
    this.props.decrement(value)
    
  }
  //奇数的时候加
  incrementIfOdd = () => {
    
    //获取数字
    const value = this.refs.content.value*1
   
    //判断
    
    if(this.props.number%2!==0){
      this.props.increment(value)
    }
  }
  //异步的加
  incrementAsync = () => {
    
    //获取数字
    const value = this.refs.content.value*1
    setTimeout(() => {
      this.props.increment(value)
    }, 1000);
  }

  render() {
    const {number}=this.props
    console.log(this.props)
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
//把state中的number数据拿出来，放在一个number属性中
//这些属性都被放到了当前的这个组件的props中了

//把这些方法一次性全部放去props中了
 
  

export default connect(
  (state)=>({
 
    number:state.number
    
  }),


  {
    increment,
    decrement
  }
)(App)