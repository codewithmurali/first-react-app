import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    return setCount((num) => num + 1);
  };
  const decrement = () => {
    return setCount((num) => num - 1);
  };
  const zero = () => {
    return setCount((num) => (num = 0));
  };
  return [count, increment, decrement, zero];
};
