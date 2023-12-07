import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction, resetAction } from "../Services/Action/CounterAction";

function CounterApp() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="container m- text-center ">
      <h1 className="bg-teal-500 font-bold text-2xl  py-4">
        React Redux Counter App
      </h1>
      <div className="container flex h-[90vh] items-center justify-center  flex-col">
        <h1 className="font-bold text-4xl">Count: {count} </h1>

        <div className="flex gap-4 items-center justify-center">

          <button onClick={() => dispatch(incrementAction())}  className="btn ">
            Increment
          </button>

          <button onClick={() => dispatch(resetAction())} className="btn">
            Reset
          </button>

          <button onClick={() => dispatch(decrementAction())} className="btn">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterApp;
