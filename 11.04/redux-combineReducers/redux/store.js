/* //引入redux
import {createStore} from 'redux'
//引入reducers
import reducers from './reducers'
//创建store对象，还需要添加reducers函数，并暴露出去

export default createStore(reducers) */

//引入redux
import {createStore} from 'redux'
//引入reducers
import reducers from './reducers'
//创建store对象，还需要添加reducres函数，并暴露出去

export default createStore(reducers)