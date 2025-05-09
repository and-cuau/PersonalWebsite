import { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}></div>
      <div className={styles.imgcontainer}>
        <div className={styles.titlecard}>
          <div className={styles.namecontainer}>
            <h1 className={styles.firstname}>ANDRE</h1>
            <h1 className={styles.lastname}>CUAUTLE</h1>
          </div>
          <h2 className={styles.subtitle}>Full Stack SWE Portfolio</h2>
        </div>
        <img src="./IMG_2203.jpg" alt="My Pic" style={{ width: "506px" }} />
      </div>
    </div>
  );
}
