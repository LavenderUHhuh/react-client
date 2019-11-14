// 包含了多个可以修改数据的函数
// 引入redux
import {combineReducers} from 'redux'
// 引入action-types.js
import {UPDATE_SEARCH} from './action-types.js'
// 函数
function searchName(prevState='',action){
  // 判断action的type
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.data
    default:
      return prevState
  }
}
// 合并reduers,并暴露
export default combineReducers({
  searchName
})