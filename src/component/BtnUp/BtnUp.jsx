import React from "react";
import CounterContext from "../Context/ContextCounter";

const BtnUp = ({ count }) => {
  return (
    <CounterContext.Consumer>
      {(ctx) => (
        <div>
          <button
            className="countBtn"
            onClick={() => ctx.handleIncrement(count || 1)}
            disabled={ctx.data.disabled}
          >
            + {count || 1}
          </button>
        </div>
      )}
    </CounterContext.Consumer>
  );
};

export default BtnUp;
