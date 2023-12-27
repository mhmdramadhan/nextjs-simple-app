import React, { useState } from "react";
import Button from "./Button";

const Counter = ({initialValue}) => {
  const [counter, setCounter] = useState(initialValue);
  const handleClick = () => {
    setCounter((e) => e + 1);
  };

  return (
    <div>
      <div className="text-5xl font-bold">{counter}</div>
      <div className="mt-5 flex items-center gap-3">
        <Button onClick={handleClick}>+1</Button>
        <Button
          onClick={() => {
            handleClick();
            handleClick();
            handleClick();
          }}
        >
          +3
        </Button>
      </div>
    </div>
  );
};

export default Counter;
