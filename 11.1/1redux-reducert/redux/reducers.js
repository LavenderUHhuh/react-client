

//引入type
import {INCREMENT,DECREMENT} from './action-types.js'
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
export default number