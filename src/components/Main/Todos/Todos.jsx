import React, { useState } from "react";
import Todo from "./Todo/Todo";
import styles from "./todos.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../../redux/slices/counter";

export default function Todos({ todos, setTodos, tabs }) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(1);

  const deleteAllClickHandler = () => {
    const newArray = todos.filter((todo) => todo.completed === false);
    setTodos(newArray);
  };

  return (
    <>
      {todos.map((todo) => {
        if (tabs[0].isActive) {
          return (
            <Todo todos={todos} setTodos={setTodos} todo={todo} tabs={tabs} />
          );
        } else if (tabs[1].isActive && !todo.completed) {
          return (
            <Todo todos={todos} setTodos={setTodos} todo={todo} tabs={tabs} />
          );
        } else if (tabs[2].isActive) {
          return todo.completed ? (
            <Todo todos={todos} setTodos={setTodos} todo={todo} tabs={tabs} />
          ) : null;
        }
        return null;
      })}
      <div className={styles.btnDeleteAllWrapper}>
        {tabs[2].isActive && (
          <button
            type="button"
            className={styles.deleteAll}
            onClick={() => deleteAllClickHandler()}
          >
            delete all
          </button>
        )}
        <input
          defaultValue={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
      </div>
    </>
  );
}
