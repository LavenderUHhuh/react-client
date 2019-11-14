//包含了多个reducer，更新/修改状态数据的函数
//引入action的type
import {SAVE_USER,REMOVE_USER} from './action-types'
//引入redux
import{combineReducers} from 'redux'
//引入storage.js文件
import {setItem,getItem,removeItem} from '../utils/storage'
const initUser={
  user:getItem('user')||{},
  token:getItem('token')||''
}
function user(prevState=initUser,action){
  //判断type
  switch(action.type){
    case SAVE_USER:
      //保存用户信息到redux中的同时也要保存到localStorage
      setItem('user',action.data.user)
      //保存token串到redux中的同时也要保存到localStorage
      setItem('token',action.data.token)

      return action.data
case REMOVE_USER:
  //删除用户信息
  removeItem('user')
  //删除token信息
  removeItem('token')
  //返回最新的数据
  return{
    user:{},
    token:''
  }
    default:
      return prevState
  }
}
export default combineReducers({
  user
})