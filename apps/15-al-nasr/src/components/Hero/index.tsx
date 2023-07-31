import React from "react";
import clsx from "clsx";

import styles from "./hero.module.css";

import ContentWrapper from "../../layouts/MainLayout";

const Hero = () => {
  return (
    <ContentWrapper>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.budget}>
            <span className={styles.textBudget}>No. 1 in Indonesia</span>
          </div>
          <h1 className={styles.heroTitle}>
            Make it easy for your Umrah worship with Al Nasr Travel
          </h1>
          <p className={styles.heroDescription}>
            Facilitate your Umrah pilgrimage with us, we already have hundreds
            of thousands of customers, you can go for Umrah to Mecca and Medina
          </p>
          <button className={clsx(styles.button, "btn-contained")}>
            Contact Us
          </button>
        </div>
        <div className={styles.right}>
          <div className={styles.backdrop}></div>
          <div className={styles.videoContainer}>
            <img className={styles.video} src="/images/hero.png" alt="" />
            <div className={styles.playContainer}></div>
            <img className={styles.play} src="/images/icons/play.png" alt="" />
          </div>
          <img className={styles.review1} src="/images/review1.png" alt="" />
          <img className={styles.review2} src="/images/review2.png" alt="" />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Hero;
