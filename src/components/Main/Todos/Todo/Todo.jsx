import React from "react";
import styles from "./todo.module.css";
import TrashBinSVG from "../../../../assets/deleteIcon.svg";

export default function Todo({ todo, todos, setTodos, tabs }) {
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
    <div className={styles.wrapperTodoandDelete}>
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
          {todo.text}
        </span>
      </div>
      {tabs[2].isActive && (
        <span>
          <img
            className={styles.deleteButton}
            src={TrashBinSVG}
            alt="Bin"
            onClick={() => handleDelete(todo.id)}
          />
        </span>
      )}
    </div>
  );
}
