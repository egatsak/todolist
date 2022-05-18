import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../redux/features/counter/counterSlice";

export function Counter() {
  const [amaut, setAmount] = useState(1);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input value={amaut} onChange={(e) => setAmount(e.target.value)} />
        <button
          aria-label="Increment value"
          onClick={() => setAmount(amaut + 1)}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => setAmount(amaut - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
