import React from "react";
import styles from "./header.module.css";
import { useSelector } from "react-redux";

export default function Header() {
  const count = useSelector((state) => state.counter.value);
  return <div className={styles.header}>#todo {count}</div>;
}
