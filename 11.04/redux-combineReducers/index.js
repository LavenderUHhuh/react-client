/* import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from './redux/store'

store.subscribe(()=>{
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
})
ReactDOM.render(<App store={store}/>, document.getElementById('root')); */

//引入React
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入App组件
import App from './App'
//引入store对象
import store from './redux/store'
store.subscribe(()=>{
  //渲染组件
  ReactDOM.render(<App store={store }/>,document.getElementById('root'))

})
//渲染组件
ReactDOM.render(<App store={store}/>,document.getElementById("root"))