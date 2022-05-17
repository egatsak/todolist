import React, { useState } from "react";
import Tabs from "./Tabs/Tabs";
import AddTodo from "./AddTodo/AddTodo";
import Todos from "./Todos/Todos";
import styles from "./main.module.css";
import { TABS } from "../../constants/constants.js";

export default function Main() {
  
  const [todos, setTodos] = useState([]);
  const [tabs, setTabs] = useState(TABS);
  
  return (
    <main className={styles.main}>
      <Tabs tabs={tabs} setTabs={setTabs} />
      <AddTodo todos={todos} setTodos={setTodos} tabs={tabs} />
      <Todos tabs={tabs} todos={todos} setTodos={setTodos} />
    </main>
  );
}
