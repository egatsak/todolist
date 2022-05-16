import React from "react";
import styles from "./tabs.module.css";

export default function Tabs({ tabs, setTabs }) {
  const handleClick = (id) => {
    const newTabs = tabs.map((tab) => {
      if (tab.isActive) {
        tab.isActive = false;
      }
      if (tab.id === id) {
        tab.isActive = true;
      }
      return tab;
    });
    setTabs(newTabs);
  };
  return (
    <div className={styles.tabs}>
      <ul className={styles.spisok}>
        {tabs.map((tab) => {
          return (
            <>
              <li
                key={tab.id}
                className={styles.element}
                onClick={() => handleClick(tab.id)}
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
