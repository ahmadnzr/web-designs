import React from "react";

import styles from "./burgerMenu.module.css";

interface Props {
  onClick: () => void;
}

const BurgerMenu = ({ onClick }: Props) => {
  return (
    <div className={styles.burgerMenu} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerMenu;
