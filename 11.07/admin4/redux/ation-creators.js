//包含了多个同步操作.action法人creator--包含了产生的多个action对象的工厂函数
import { SAVE_USER, REMOVE_USER, UPDATE_TITLE } from './action-types'
//保存用户信息(的同时也要保存token)
export const saveUser = (value) => ({ type: SAVE_USER, data: value })

//删除用户信息（的同时也要删除token）
export const removeUser = () => ({ type: REMOVE_USER })

//更新title信息
export const updateTitle = (value) => ({ type: UPDATE_TITLE, data: value })
