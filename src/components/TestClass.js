import React, { Component } from 'react';
import { connect } from "react-redux";
import { increment, decrement} from './acton'


export class TestClass extends Component {
    constructor(props){
        super(props)
       console.log('**************', props)
    }
    render() {
        return (
            <div>
      <button onClick={()=>{
      this.props.increment()
      }}>Increment</button>

      <p>{this.props.count}</p>
      <button onClick={()=>{
          this.props.decrement()
      }}>Decrement</button>
    </div>
        )
    }
}
const mapStateToProps = (state) =>{
    console.log('class compo',state);
    return state.countRed
}

const mapDispatchToProps = (dispatch) =>{
    return {
        increment : () =>dispatch(increment()),
        decrement : () =>dispatch(decrement())
    }
}

 export default connect(mapStateToProps, mapDispatchToProps)(TestClass);
