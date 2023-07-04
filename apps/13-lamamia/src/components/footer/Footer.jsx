import React from "react";
import Image from "next/image";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 lamamia, All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          className={styles.icon}
          alt="facebook"
          width={15}
          height={15}
        />
        <Image
          src="/2.png"
          className={styles.icon}
          alt="instagram"
          width={15}
          height={15}
        />
        <Image
          src="/3.png"
          className={styles.icon}
          alt="sosial"
          width={15}
          height={15}
        />
        <Image
          src="/4.png"
          className={styles.icon}
          alt="sosial"
          width={15}
          height={15}
        />
      </div>
    </div>
  );
};

export default Footer;
