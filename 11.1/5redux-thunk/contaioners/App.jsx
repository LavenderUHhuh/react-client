//引入react-redux
import {connect} from 'react-redux'
//引入action对象
import {increment,decrement,incrementAsync} from '../redux/action-creator'
//引入counter
import Counter from '../components/counter'

//分别暴露
export default connect(
  (state)=>({
    number:state.number
  }),
  {
    increment,
    decrement,
    incrementAsync
  }
)(Counter)