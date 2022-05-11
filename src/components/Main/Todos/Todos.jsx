import React, { useState } from "react";
import styles from "./todos.module.css";
import clsx from "clsx";

export default function Todos({ todos, setTodos }) {
  let [isChecked, setChecked] = useState(false);
  console.log(todos)
  const handleClick = (id) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    });
    console.log(newArray, 'newArray')
    setTodos(newArray)
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.text} className={styles.wrapperTodo}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={todos.completed}
            onClick={() => {
              handleClick(todo.id)
              setChecked(!isChecked);
              console.log(todo);
            }}
          />{" "}
          <span
            className={
              isChecked
                ? `${styles.textTodo} ${styles.stroke}`
                : styles.textTodo
            }
            >
            {" "}
            {todo.text} была создана {todo.date.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}
