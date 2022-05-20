import React, { useState } from "react";
import styles from "./addTodo.module.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/slices/todos";

const AddTodo = ({ tabs }) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const inputHandler = (e) => {
    setTodo(e.target.value);
  };

  const handleTodo = (e) => {
    if (todo === "") {
      alert("enter task");
    } else {
      const newTodo = {
        id: uuidv4(),
        text: todo,
        completed: false,
        date: new Date(),
      };
      dispatch(addTodo(newTodo));
      setTodo("");
      e.target.reset();
    }
    e.preventDefault();
  };

  return (
    !tabs[2].isActive && (
      <form className={styles.addTodo} onSubmit={handleTodo}>
        <input
          className={styles.inputAddTodo}
          value={todo}
          type="text"
          placeholder="add details"
          onChange={inputHandler}
        />
        <input className={styles.buttonAddTodo} type="submit" value="Add" />
      </form>
    )
  );
};
export default AddTodo;
