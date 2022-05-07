import React, { useState } from "react";
import Tabs from "./Tabs/Tabs";
import AddTodo from "./AddTodo/AddTodo";
import Todos from "./Todos/Todos";
import styles from './main.module.css'

export default function Main() {
  const [todos, setTodos] = useState([]);
  return (
    <main className={styles.main}>
      <Tabs />
      <AddTodo setTodos={setTodos} todos={todos} />
      <Todos todos={todos}/>
    </main>
  );
}
