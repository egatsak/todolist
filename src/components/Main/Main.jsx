import React from "react";
import Tabs from "./Tabs/Tabs";
import AddTodo from "./AddTodo/AddTodo";
import Todos from "./Todos/Todos";
import styles from "./main.module.css";

export default function Main() {


  return (
    <main className={styles.main}>
      <Tabs />
      <AddTodo />
      <Todos />
    </main>
  );
}
