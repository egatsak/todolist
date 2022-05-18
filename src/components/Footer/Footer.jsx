import React from "react";
import styles from "./footer.module.css";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/slices/counter";

export default function Footer() {
  const dispatch = useDispatch();
  return (
    <div className={styles.footer}>
      <span className={styles.text} onClick={() => dispatch(increment())}>
        created by{" "}
      </span>
      <a
        className={styles.link}
        href="https://devchallenges.io/portfolio/egatsak"
      >
        egatsak
      </a>
      <span className={styles.text}> - devChallenges.io</span>
    </div>
  );
}
