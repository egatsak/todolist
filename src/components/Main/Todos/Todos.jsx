import React from "react";
import styles from "./todos.module.css";
import clsx from "clsx";

export default function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.text} className={styles.wrapperTodo}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={todos.completed}
            onClick={() => {
              todo.completed = !todo.completed;
              console.log(todo);
            }}
          />{" "}
          <span
            className={clsx(styles.textTodo, {
              [styles.stroke]: todo.completed === true,
            })}
          >
            {" "}
            {todo.text} была создана {todo.date.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}
