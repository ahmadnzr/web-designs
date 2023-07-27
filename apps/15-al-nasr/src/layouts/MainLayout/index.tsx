import React from "react";

import styles from "./contentWrapper.module.css";

interface Props {
  children: React.ReactNode;
}
const ContentWrapper = ({ children }: Props) => {
  return <div className={styles.layout}>{children}</div>;
};

export default ContentWrapper;
