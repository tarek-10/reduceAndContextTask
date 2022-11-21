import React, { useReducer, useState } from "react";
import "./App.css";
import CounterContext from "./component/Context/ContextCounter";
import { DECREMENT, INCREMENT, TOOGLE } from "./component/Context/types";
import CounterApp from "./component/CounterApp/CounterApp";
const reducerFun = (state, action) => {
  switch (action.type) {

    case INCREMENT:
      return { ...state , counts: state.counts + action.payload };
    case DECREMENT:
      return { ...state , counts: state.counts - action.payload };
     case TOOGLE:
      return {...state,disabled:!state.disabled}
    default:
      return state;
  }
};
const App = () => {
  const [data, dispatch] = useReducer(reducerFun, {
    counts: 1,
    disabled: false,
  });
  const { counts, disabled } = data;
  const handleIncrement = (val) => {
    dispatch({
      type: INCREMENT,
      payload: val,
    });
  };
  const handleDecrement = (val) => {
    dispatch({
      type: DECREMENT,
      payload: val,
    });
  };
  const handleToggle = () => {
    dispatch({
      type: TOOGLE,
    });
  };

  return (
    <CounterContext.Provider
      value={{
        data,
        handleIncrement,
        handleDecrement,
        handleToggle,
      }}
    >
      <div className="contextContainer">
        <button className="btnResume" onClick={handleToggle}>{disabled ? "Resume" : "stop"}</button>
        <CounterApp />
      </div>
    </CounterContext.Provider>
  );
};

export default App;
