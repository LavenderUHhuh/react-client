//包含了多个reducer，更新/修改状态数据的函数
//引入action的type
import { SAVE_USER, REMOVE_USER, UPDATE_TITLE, GET_CATEGORIES, ADD_CATEGORY, UPDATE_CATEGORY, DEL_CATEGORY, GET_ROLES, ADD_ROLE, UPDATE_ROLE, DELETE_ROLE, GET_USERS, ADD_USER, UPDATE_USER, DELETE_USER } from './action-types'
//引入redux
import { combineReducers } from 'redux'
//引入storage.js文件
import { setItem, getItem, removeItem } from '../utils/storage'
const initUser = {
  user: getItem('user') || {},
  token: getItem('token') || ''
}
function user(prevState = initUser, action) {
  //判断type
  switch (action.type) {
    case SAVE_USER:
      //保存用户信息到redux中的同时也要保存到localStorage
      setItem('user', action.data.user)
      //保存token串到redux中的同时也要保存到localStorage
      setItem('token', action.data.token)

      return action.data
    case REMOVE_USER:
      //删除用户信息
      removeItem('user')
      //删除token信息
      removeItem('token')
      //返回最新的数据
      return {
        user: {},
        token: ''
      }
    default:
      return prevState
  }
}
//对title信息的相关操作
function title(prevState = '', action) {
  switch (action.type) {
    case UPDATE_TITLE:
      return action.data

    default:
      return prevState
  }
}
//对分类信息数据做相关的操作
function categories(prevState = [], action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.data
    case ADD_CATEGORY:
      return [...prevState, action.data]
    case UPDATE_CATEGORY:
      return prevState.map(category => {
        if (category._id === action.data._id) {
          return action.data
        }
        return category
      })
    case DEL_CATEGORY:
      return prevState.filter(category => category._id !== action.data)
    default:
      return prevState
  }
}
//对角色信息数据做相关的操作
function roles(prevState = [], action) {
  switch (action.type) {
    case GET_ROLES:
      return action.data
    case ADD_ROLE:
      return [...prevState, action.data]
    case UPDATE_ROLE:
      return prevState.map(role => {
        if (role._id === action.data._id) {
          return action.data
        }
        return role
      })
    case DELETE_ROLE:
      return prevState.filter(role => role._id !== action.data)
    default:
      return prevState
  }
}
//对用户信息数据做相关的操作
function users(prevState = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.data
    case ADD_USER:
      return [...prevState, action.data]
    case UPDATE_USER:
      return prevState
    case DELETE_USER:
      return prevState.filter(user => user.username !== action.data)
    default:
      return prevState
  }
}
export default combineReducers({
  user,
  title,
  categories,
  roles,
  users
})