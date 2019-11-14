import React ,{Component} from 'react'
//引入WithHoc组件

import WithHoc from './withHoc/WithHoc'
@WithHoc(1,2)
class Login extends Component{
  static displayName='Login'
  //提交的操作
  submit=(event)=>{
    //阻止默认行为
    event.preventDefault()
  }
  //显示账号和密码
  handleClick=()=>{
    const {username,userpwd}=this.props
    console.log(username, userpwd)
  }
  render() {
    console.log(this)
    return (
      <form onSubmit={this.submit}>
        帐号: <input type="text" onChange={this.props.handleChange('username')} />
        密码: <input type="password" onChange={this.props.handleChange('userpwd')}  />
        <input type="submit" value="登录" onClick={this.handleClick} />
      </form>
    );
  }
}
export default WithHoc(1,2)(Login)
