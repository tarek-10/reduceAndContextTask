import { createContext } from "react";

const CounterContext = createContext({
  data: {
    counts: 1,
    disabled: false,
  },
  handleIncrement: () => {},
  handleDecrement: () => {},
  handleToggle: () => {},
});

export default CounterContext;
