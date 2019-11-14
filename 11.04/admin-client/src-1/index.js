import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'

//引入react-redux
import {Provider} from 'react-redux'

import App from './App';
//引入重置的样式文件
import './assets/css/reset.css'

ReactDOM.render((
<Provider store={store}>
  <App/>
</Provider>
),document.getElementById('root'))