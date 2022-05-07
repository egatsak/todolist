import React from "react";
import styles from "./tabs.module.css";

export default function Tabs() {
  return (
    <div className={styles.tabs}>
      <ul className={styles.spisok}>
        <li className={styles.element}>All</li>
        <li className={styles.element}>Active</li>
        <li className={styles.element}>Completed</li>
      </ul>
      <div className={styles.border}></div>
    </div>
  );
}
