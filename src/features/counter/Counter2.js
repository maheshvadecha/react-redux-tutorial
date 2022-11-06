import React, { useState } from 'react';

const Counter = () =>{
    const [count, setCount]= useState(0);
    return (
        <>
        <div>
            <button type="button" onClick={ ()=>{setCount(count + 1);}}> + </button>
              <span value="">count: { count }</span>
            <button type="button" onClick={ ()=>{setCount(count - 1);}}> - </button>
        </div>
        </>
    );
}
export default Counter;    
    