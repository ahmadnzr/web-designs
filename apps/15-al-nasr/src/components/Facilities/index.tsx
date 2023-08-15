import React from "react";
import ContentWrapper from "../../layouts/MainLayout";
import styles from "./facilities.module.css";
import clsx from "clsx";
import Icon from "../Icon";

export const Facilities = () => {
  return (
    <div className={styles.container}>
      <ContentWrapper>
        <div className={styles.top}>
          <h1 className={clsx("text-title", styles.title)}>
            Facilities We Provide For You
          </h1>
          <p className={clsx("text-description", styles.desc)}>
            We provide comfort for our customers, with the various facilities we
            provide that we provide
          </p>
        </div>
        <div className={styles.content}>
          {[
            {
              id: 1,
              label: "Safety & Security",
              subLabel: "We take care of your security in 24 hours",
              icon: "safety",
            },
            {
              id: 2,
              label: "Conseling",
              subLabel:
                "Provide counseling to stay fit spiritually and religius",
              icon: "buffer",
            },
            {
              id: 3,
              label: "Vehicle In Saudi",
              subLabel: "Bus and Car Vehicles While in Saudi",
              icon: "vehicle",
            },
            {
              id: 4,
              label: "Health In Saudi",
              subLabel: "Free Health Facilities for every customer",
              icon: "health",
            },
            {
              id: 5,
              label: "Hotel Rate 5",
              subLabel: "5 star hotel accommodation every customer",
              icon: "hotel",
            },
            {
              id: 6,
              label: "Food & Drink",
              subLabel: "Provide food and drinks while in Saudi",
              icon: "food",
            },
            {
              id: 7,
              label: "Membership",
              subLabel: "Obtain a membership card for each customer",
              icon: "membership",
            },
            {
              id: 8,
              label: "Vaccine",
              subLabel: "Free meningitis vaccine for all customers",
              icon: "vaccine",
            },
          ].map((item) => (
            <div className={styles.card} key={item.id}>
              <Icon type={item.icon} />
              <div>
                <h3 className={styles.cardTitle}>{item.label}</h3>
                <span className={styles.cardDesc}>{item.subLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
};
