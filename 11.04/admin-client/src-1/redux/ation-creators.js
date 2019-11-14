//包含了多个同步操作
import { SAVE_USER } from './action-types'
//保存用户信息(的同时也要保存token)
export const saveUser = (value) => ({ type: SAVE_USER, data: value })