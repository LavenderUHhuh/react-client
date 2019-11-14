import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App'
//引入react-redux组件
import { Provider } from 'react-redux'
import store from './redux/store'

/* store.subscribe(()=>{
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
})
ReactDOM.render(<App store={store}/>, document.getElementById('root'));
 */
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))