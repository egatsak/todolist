import React from "react";
import styles from "./todo.module.css";
import TrashBinSVG from "../../../../assets/deleteIcon.svg";
import { useDispatch } from "react-redux";
import { deleteTodoById, setIsChecked } from "../../../../redux/slices/todos";

export default function Todo({ todo, tabs }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapperTodoandDelete}>
      <div
        key={todo.id}
        className={styles.wrapperTodo}
        onClick={() => {
          dispatch(setIsChecked(todo.id));
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
            alt="Del"
            onClick={() => dispatch(deleteTodoById(todo.id))}
          />
        </span>
      )}
    </div>
  );
}
