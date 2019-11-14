import React from 'react';
import ReactDOM from 'react-dom';

import App from './contaioners/App';
//引入react-redux
import {Provider} from 'react-redux'
import store from './redux/store'

/* store.subscribe(()=>{
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
})
ReactDOM.render(<App store={store}/>, document.getElementById('root')); */


ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
),document.getElementById('root'))