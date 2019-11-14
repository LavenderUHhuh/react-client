/* //引入type
import{INCREMENT,DECREMENT} from './action-types.js'


//分别暴露
export const increment =(value)=>({type:INCREMENT,data:value})
export const decrement =(value)=>({type:DECREMENT,data:value}) */


//引入type
import {INCREMENT,DECREMENT} from './action-types'

//分别暴露    直接返回对象，叫：同步action
export const increment=(value)=>({type:INCREMENT,data:value})
export const decrement=(value)=>({type:DECREMENT,data:value})
export const updateArr=(value)=>({type:'UPDATEARR',data:value})
//如果想要做异步的action，那么返回的是action函数
//异步操作，实际上也是应该事先increment的操作
/* export const incrementAsync=(value)=>{
  //模拟异步操作
  return (dispatch)=>{
    //异步的操作有了结果之后，直接分发同步的action
    setTimeout(()=>{
      dispatch(increment(value))
    },800)
  }
} */