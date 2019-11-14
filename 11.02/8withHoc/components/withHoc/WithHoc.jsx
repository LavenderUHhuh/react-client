import React, { Component } from 'react';
// HOC-----High Order Component---高阶组件,一般高阶组件在定义的时候使用的是工厂函数的方式来定义
function WithHoc(a,b) {
  return (WrappedComponent) => {
    // 内部会返回一个新的组件
    return class extends Component {  // 父级组件----state,回调
      state = {
        username: '',  // 帐号
        userpwd: ''  // 密码
      }
      handleChange = (key) => {
        return (event) => {
          // 更新状态数据
          this.setState({
            [key]: event.target.value
          })
        }
      }
      render() {
        console.log(a,b)
        return <WrappedComponent handleChange={this.handleChange} {...this.state} />   // 子级组件--Login组件
      }
    }
  }

}
export default WithHoc;



