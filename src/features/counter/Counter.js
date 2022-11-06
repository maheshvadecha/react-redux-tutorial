import { useSelector, useDispatch} from 'react-redux';
import { increment, decrement, incrementByAmount} from './counterSlice';


const Counter = () =>{
    const count = useSelector((state)=>state.counter.count);
    const dispatch= useDispatch();
    return (
        <>
        <div>
            <button type="button" onClick={()=>{dispatch(increment())}}> + </button>
              <span value="">count: { count }</span>
            <button type="button" onClick={()=>{dispatch(decrement(5))}}> - </button>
            <button type="button" onClick={()=>{dispatch(incrementByAmount(10))}}> increment by amount 10 </button>

        </div>
        </>
    );
}
export default Counter;         
     