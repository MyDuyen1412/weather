import React from "react";
import styles from "./style.module.css";

function NotFound() {
  return (
    <div className={styles.notFound}>
      <span className={styles.notFound__four}>
        <span className={styles.notFound__text}>4</span>
      </span>
      <span className={styles.notFound__zero}>
        <span className={styles.notFound__text}>0</span>
      </span>
      <span className={styles.notFound__four}>
        <span className={styles.notFound__text}>4</span>
      </span>
    </div>
  );
}

export default NotFound;
