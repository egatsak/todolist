import React from "react";
import styles from "./todo.module.css";

export default function Todo({ todos, setTodos }) {
  const handleClick = (id) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newArray);
  };
  return (
    <div>
      {" "}
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={styles.wrapperTodo}
          onClick={() => {
            handleClick(todo.id);
          }}
        >
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={todo.completed}
          />{" "}
          <span
            className={
              todo.completed
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
