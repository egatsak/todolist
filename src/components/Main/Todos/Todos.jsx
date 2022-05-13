import React from "react";
import Todo from "./Todo/Todo";
import styles from "./todos.module.css";

export default function Todos({ todos, setTodos, tabs }) {
  const handleClick = () => {
    setTodos([]);
  };
  return (
    <>
      {todos.map((todo) => {
        if (tabs[0].isActive) {
          return <Todo todos={todos} setTodos={setTodos} todo={todo} />;
        } else if (tabs[1].isActive) {
          return todo.completed ? null : (
            <Todo todos={todos} setTodos={setTodos} todo={todo} />
          );
        } else if (tabs[2].isActive && todo.completed) {
          return <Todo todos={todos} setTodos={setTodos} todo={todo} />;
        }
      })}
      {tabs[2].isActive && (
        <button
          type="button"
          className={styles.deleteAll}
          onClick={handleClick}
        >
          delete all
        </button>
      )}
    </>
  );
}
