//引入type
import{INCREMENT,DECREMENT} from './action-types.js'


//分别暴露
/* export const increment =(value)=>({type:INCREMENT,data:value})
export const decrement =(value)=>({type:DECREMENT,data:value}) */

//分别暴露
export const increment=(value)=>({type:INCREMENT,data:value})
export const decrement=(value)=>({type:DECREMENT,data:value})