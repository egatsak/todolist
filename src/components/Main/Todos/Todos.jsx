import React from "react";
import Todo from "./Todo/Todo";
import styles from "./todos.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteAll } from "../../../redux/slices/todos";
import AddTodo from "../AddTodo/AddTodo";

export default function Todos({ tabs }) {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteAllClickHandler = () => {
    dispatch(deleteAll());
  };

  return (
    <>
      {todos.map((todo) => {
        if (tabs[0].isActive) {
          return <Todo todo={todo} tabs={tabs} />;
        } else if (tabs[1].isActive && !todo.completed) {
          return <AddTodo todo={todo} tabs={tabs} />;
        } else if (tabs[2].isActive) {
          return todo.completed ? <Todo todo={todo} tabs={tabs} /> : null;
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
      </div>
    </>
  );
}
