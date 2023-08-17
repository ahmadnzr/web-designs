import React from "react";
import ContentWrapper from "../../layouts/MainLayout";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <ContentWrapper>
        <div className={styles.top}>
          <div className={styles.footLogo}>
            <img src="/images/logo/logo-text.png" alt="" />
            <p className={styles.footTxt}>
              Comfortable and Quiet Worship, Our Service No. 1 in Indonesia
            </p>
          </div>
          <div className={styles.menus}>
            <div className={styles.menu}>
              <h3 className={styles.linkTitle}>Quick Link</h3>
              <div className={styles.links}>
                <a href="#">About Us</a>
                <a href="#">Fligh Accomodation</a>
                <a href="#">Facilities</a>
                <a href="#">Gallery</a>
              </div>
            </div>
            <div className={styles.menu}>
              <h3 className={styles.linkTitle}>Package Umrah</h3>
              <div className={styles.links}>
                <a href="#">Al Nasr Umrah Bronze</a>
                <a href="#">Al Nasr Umrah Silver</a>
                <a href="#">Al Nasr Umrah Gold</a>
                <a href="#">Al Nasr Umrah Priority</a>
              </div>
            </div>
            <div className={styles.menu}>
              <h3 className={styles.linkTitle}>Package Hajj</h3>
              <div className={styles.links}>
                <a href="#">Al Nasr Hajj Diamond</a>
                <a href="#">Al Nasr Hajj Platinum</a>
                <a href="#">Al Nasr Hajj Priority</a>
              </div>
            </div>
            <div className={styles.menu}>
              <h3 className={styles.linkTitle}>Offile Place</h3>
              <div className={styles.links}>
                <a href="#">Indonesia</a>
                <a href="#">Saudi Arabia</a>
                <a href="#">Uni Emirat Arab</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.bottom}>
          <p>Copyright © 2006 - 2023 Al Nasr Travel | All Reserverd</p>
          <div className={styles.socials}>
            <div className={styles.iconContainer}>
              <img src="/images/icons/instagram.png" alt="" />
            </div>
            <div className={styles.iconContainer}>
              <img src="/images/icons/facebook.png" alt="" />
            </div>
            <div className={styles.iconContainer}>
              <img src="/images/icons/twitter.png" alt="" />
            </div>
            <div className={styles.iconContainer}>
              <img src="/images/icons/youtube.png" alt="" />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Footer;
