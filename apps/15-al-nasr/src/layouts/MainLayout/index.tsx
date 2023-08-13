import React from "react";

import styles from "./contentWrapper.module.css";

interface Props {
  ref?: React.LegacyRef<HTMLDivElement>;
  children: React.ReactNode;
}
const ContentWrapper = ({ children, ref }: Props) => {
  return (
    <div ref={ref} className={styles.layout}>
      {children}
    </div>
  );
};

export default ContentWrapper;
