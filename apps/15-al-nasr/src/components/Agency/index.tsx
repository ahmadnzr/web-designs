import React from "react";
import clsx from "clsx";

import ContentWrapper from "../../layouts/MainLayout";
import Icon from "../Icon";

import styles from "./agency.module.css";

const Agency = () => {
  return (
    <div className={styles.container}>
      <ContentWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imageContainer}>
              <img src="/images/photo-1.png" alt="" />
              <img
                src="/images/review3.png"
                alt=""
                style={{ position: "absolute", top: "64px", right: 0 }}
              />
              <img
                src="/images/review4.png"
                alt=""
                style={{ position: "absolute", bottom: "100px", right: "40px" }}
              />
              <img
                src="/images/logo/logo-text.png"
                alt=""
                style={{
                  position: "absolute",
                  bottom: "4px",
                  left: "62px",
                }}
              />
            </div>
          </div>
          <div className={styles.right}>
            <h1 className={clsx(styles.agencyTitle, "text-title")}>
              A Wonderful Agency To Fulfill your Dreams
            </h1>
            <p className={clsx(styles.desc, "text-description")}>
              The Hajj and Umrah pilgrimages are smooth, the heart is clean. we
              have been trusted since 2006 and have obtained a license from
              SAUDI ARABIA to become this travel agency.
            </p>
            <div className={styles.benefitContainer}>
              <div className={styles.benefit}>
                <Icon type="airplane" />
                <span className="textDescription">
                  Flight Jakarta Saudi - Saudi Jakarta
                </span>
              </div>
              <div className={styles.benefit}>
                <Icon type="ticket" />
                <span className="textDescription">
                  Tickets are included in the cost
                </span>
              </div>
              <div className={styles.benefit}>
                <Icon type="hotel" />
                <span className="textDescription">
                  Comfortable hotel with a rating of 4
                </span>
              </div>
              <div className={styles.benefit}>
                <Icon type="visa" />
                <span className="textDescription">
                  We cover the Visa Fee and it&apos;s Included
                </span>
              </div>
            </div>
            <div className={styles.actions}>
              <button className="btn-contained">Learn More</button>
              <button className="btn-outlined">Contact Us</button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Agency;
