

//引入type
/* import {INCREMENT,DECREMENT} from './action-types.js'
function number(prevState=0,action){
  console.log(prevState,action)
  //判断type
  switch (action.type){
    case INCREMENT:
      return prevState + action.data   //加的操作
    case DECREMENT:
      return prevState - action.data  //减得操作
      default:
        return prevState
  }
}
export default number */


//引入type
import { INCREMENT, DECREMENT } from "./action-types"
import { combineReducers } from "redux"
//最终这个函数也要暴露出去
function number(prevState = 0, action) {
  console.log(prevState, action)
  //判断type
  switch (action.type) {
    case INCREMENT:
      return prevState + action.data  //加的操作
    case DECREMENT:
      return prevState - action.data //件的操作
    default:
      return prevState
  }
}

function arr(prevState=[],action){
  switch(action.type){
    case 'UPDATEARR':
     return [action.data,...prevState]
    default:
      return prevState 
  }
}
//两个一起暴露出去，一函数的方式进行暴露，内部是对象

export default combineReducers({
  number,
  arr
})