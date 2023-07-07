"use client";

import React, { useContext } from "react";

import { ThemeContext } from "@/context/ThemeContext";
import styles from "./darkmodeToggle.module.css";

const DarkmodeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>0</div>
      <div className={styles.icon}>1</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "4px" } : { right: "4px" }}
      />
    </div>
  );
};

export default DarkmodeToggle;
