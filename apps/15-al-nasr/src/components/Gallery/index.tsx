import React from "react";
import ContentWrapper from "../../layouts/MainLayout";

import styles from "./gallery.module.css";
import clsx from "clsx";

const Gallery = () => {
  return (
    <ContentWrapper>
      <div className={styles.top}>
        <h1 className={clsx("text-title", styles.title)}>
          Gallery Footage In Saudi Arabia
        </h1>
        <p className={clsx("text-description", styles.desc)}>
          We provide comfort for our customers, with the various facilities we
          provide that we provide
        </p>
      </div>
      <div className={styles.content}>
        <img src="/images/image1.png" alt="" className={styles.imgLg} />
        <img src="/images/image2.png" alt="" className={styles.imgSm} />
        <img src="/images/image3.png" alt="" className={styles.imgSm} />
        <img src="/images/image4.png" alt="" className={styles.imgSm} />
        <img src="/images/image5.png" alt="" className={styles.imgSm} />
      </div>
    </ContentWrapper>
  );
};

export default Gallery;
