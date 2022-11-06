import { useSelector } from "react-redux"; 
const Coin =()=>{
    const coin = useSelector((state)=>state.counter.count)
    return (
        <>
            <span type="">coin: {coin}</span>
        </>
    );
}
export default Coin;