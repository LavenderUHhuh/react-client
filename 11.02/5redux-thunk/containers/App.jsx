
import { connect } from 'react-redux'


//引入action对象
import { increment, decrement, incrementAsync } from '../redux/action-creator'

//引入Counter
import Counter from '../components/Counter'



/* const mapStateToProps=(state)=>{
  return{
    number:state.number
  }

}
//把这些方法一次性都给props
const mapDispatchToProps=(dispatch)=>{
  return{
    increment,
   
    decrement
    
  }
}
export default connect(
  
  mapStateToProps,
  mapDispatchToProps
)(App) */

export default connect(
  (state) => ({
    number: state.number,

  })
  ,
  {
    increment,
    decrement,
    incrementAsync
  }
)(Counter)