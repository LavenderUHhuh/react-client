// 包含了多个函数,返回几乎都是同步的action对象,可以是异步action函数
// 引入action-types
import {UPDATE_SEARCH} from './action-types.js'
export const updateSearch=(value)=>({type:UPDATE_SEARCH,data:value})