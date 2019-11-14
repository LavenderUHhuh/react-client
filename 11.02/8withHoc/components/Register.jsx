import React, { Component } from 'react'
import WithHoc from './withHoc/WithHoc'
class Register extends Component {
  //提交的操作
  submit=(event)=>{
   // 阻止默认行为
   event.preventDefault()
  }
  handleClick = () => {
    const { username, userpwd,reuserpwd } = this.props
    console.log(username, userpwd,reuserpwd)
  }
  render() {
    return (
      <form onSubmit={this.submit}>
        帐号: <input type="text" onChange={this.props.handleChange('username')} />
        密码: <input type="password" onChange={this.props.handleChange('userpwd')} />
        密码: <input type="password" onChange={this.props.handleChange('reuserpwd')} />
        <input type="submit" value="登录" onClick={this.handleClick} />
      </form>
    );
  }
}
export default WithHoc(3,4)(Register)