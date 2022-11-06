import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./acton";

const TestFun = () => {
  const count = useSelector((state) => state.countRed.count);
  const dispatch = useDispatch();
  // const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <button
          onClick={() => {
            dispatch(increment(10));
          }}
        >
          Increment
        </button>

        <p>{count}</p>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default TestFun;
