import React, { Component } from 'react'
import Search from './components/Search/Search.jsx'
import Main from './components/Main/Main.jsx'


class App extends Component {
 
  render() {
   
    return (
      <div className="container">   
      < Search  />
      <Main  />
     </div>
    )
  }
}
export default App;