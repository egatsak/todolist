import React from "react";
import Todo from "./Todo/Todo";
import styles from "./todos.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteAll } from "../../../redux/slices/todos";
import AddTodo from "../AddTodo/AddTodo";

export default function Todos() {
  const { todos, tabs } = useSelector((state) => state);
  const currentTabs=tabs.tabs;
  const dispatch = useDispatch();
  

  const deleteAllClickHandler = () => {
    dispatch(deleteAll());
  };

  return (
    <>
      {todos.todos.map((todo) => {
        if (currentTabs[0].isActive) {
          return <Todo todo={todo} tabs={currentTabs} />;
        } else if (currentTabs[1].isActive && !todo.completed) {
          return <AddTodo todo={todo} />;
        } else if (currentTabs[2].isActive) {
          return todo.completed ? <Todo todo={todo} /> : null;
        }
        return null;
      })}
      <div className={styles.btnDeleteAllWrapper}>
        {currentTabs[2].isActive && (
          <button
            type="button"
            className={styles.deleteAll}
            onClick={() => deleteAllClickHandler()}
          >
            delete all
          </button>
        )}
      </div>
    </>
  );
}
