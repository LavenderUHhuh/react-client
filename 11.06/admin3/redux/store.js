//引入redux
import {createStore,applyMiddleware} from 'redux'

// 引入thunk
import thunk from 'redux-thunk'
// 引入reudx-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入reducers
import reducers from './reducers'

//暴露
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))