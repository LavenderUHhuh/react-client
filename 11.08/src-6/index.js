import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store.js'

//引入react-redux
import {Provider} from 'react-redux'

import App from './App.jsx';
//引入重置的样式文件
import './assets/css/reset.css'
//引入国际化的js文件
import './i18n/i18n.js'

//渲染组件
ReactDOM.render((
<Provider store={store}>
  <App/>
</Provider>
),document.getElementById('root'))