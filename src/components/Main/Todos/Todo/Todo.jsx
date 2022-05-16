import React from "react";
import styles from "./todo.module.css";

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
          {todo.text} была создана {todo.date.toLocaleString()}
        </span>
      </div>
      {tabs[2].isActive && (
        <span>
          <svg
            className={styles.deleteButton}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="14px"
            height="18px"
            viewBox="0 0 14 18"
            enableBackground="new 0 0 14 18"
            onClick={() => handleDelete(todo.id)}
          >
            <g>
              <path
                fill="#929292"
                d="M12.126,2.934H1.874c-0.386,0-0.7,0.314-0.7,0.7V17.3c0,0.386,0.314,0.7,0.7,0.7h10.252
		c0.386,0,0.7-0.314,0.7-0.7V3.634C12.826,3.249,12.512,2.934,12.126,2.934z M2.574,16.6V4.334h8.852V16.6H2.574z"
              />
              <path
                fill="#929292"
                d="M13.3,0.903h-2.277c-0.017-0.029-0.126-0.112-0.126-0.203c0-0.386-0.314-0.7-0.701-0.7H3.804
		c-0.386,0-0.7,0.314-0.7,0.7c0,0.091-0.109,0.174-0.126,0.203H0.7c-0.386,0-0.7,0.314-0.7,0.7s0.314,0.7,0.7,0.7h12.6
		c0.386,0,0.7-0.314,0.7-0.7S13.686,0.903,13.3,0.903z"
              />
            </g>
          </svg>
        </span>
      )}
    </div>
  );
}
