import React, { useState } from "react";
import Tabs from "./Tabs/Tabs";
import AddTodo from "./AddTodo/AddTodo";
import Todos from "./Todos/Todos";
import styles from "./main.module.css";
import { TABS } from "../../constants/constants.js";

export default function Main() {
  const [tabs, setTabs] = useState(TABS);

  return (
    <main className={styles.main}>
      <Tabs tabs={tabs} setTabs={setTabs} />
      <AddTodo tabs={tabs} />
      <Todos tabs={tabs} />
    </main>
  );
}
