import React from "react";
import styles from "./todo.module.css";

export default function Todo({ todos, todo, setTodos }) {
  const handleClick = (id) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newArray);
  };
  const handleDelete = (id) => {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
  };

  return (
    <div>
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
          {todo.text} была создана {todo.date.toLocaleString()}
        </span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
        onClick={() => handleDelete(todo.id)}
      >
        <path d="M15 39H33Q33 39 33 39Q33 39 33 39V15H15V39Q15 39 15 39Q15 39 15 39ZM10.5 11V8H17.2L19.2 6H28.8L30.8 8H37.5V11ZM15 42Q13.8 42 12.9 41.1Q12 40.2 12 39V12H36V39Q36 40.2 35.1 41.1Q34.2 42 33 42ZM15 39H33Q33 39 33 39Q33 39 33 39H15Q15 39 15 39Q15 39 15 39Z" />
      </svg>
    </div>
  );
}
