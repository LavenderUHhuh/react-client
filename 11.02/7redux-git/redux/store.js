// 包含了store对象
// 引入redux
import {createStore,applyMiddleware} from 'redux'
// 引入thunk
import thunk from 'redux-thunk' 
// 引入redux的插件
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入reducers
import reducers from './reducers.js'
// 暴露store对象
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))