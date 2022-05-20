import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./tabs.module.css";
import { setIsActive } from "../../../redux/slices/tabs";

export default function Tabs() {
const tabs = useSelector((state) => state.tabs.tabs)
const dispatch = useDispatch()
  
  return (
    <div className={styles.tabs}>
      <ul className={styles.spisok}>
        {tabs.map((tab) => {
          return (
            <>
              <li
                key={tab.id}
                className={styles.element}
                onClick={() => dispatch(setIsActive(tab.id))}
              >
                {tab.name}
                <div
                  className={styles.activeTab}
                  style={tab.isActive ? { opacity: 1 } : null}
                ></div>
              </li>
            </>
          );
        })}
      </ul>
      <div className={styles.border}></div>
    </div>
  );
}
