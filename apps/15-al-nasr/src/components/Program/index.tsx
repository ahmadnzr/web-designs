import React from "react";

import ContentWrapper from "../../layouts/MainLayout";
import styles from "./program.module.css";
import clsx from "clsx";
import Icon from "../Icon";

const program = [
  {
    id: 1,
    type: "Diamond",
    status: "Best Seller",
    title: "Al Nasr Special Hajj 30 Days",
    prise: "$20,00",
    unit: "person",
    benefits: ["airplane", "hotel", "ticket", "visa"],
  },
  {
    id: 2,
    type: "Diamond",
    status: "Best Seller",
    title: "Al Nasr Special Hajj 30 Days",
    prise: "$20,00",
    unit: "person",
    benefits: ["airplane", "hotel", "ticket", "visa"],
  },
  {
    id: 3,
    type: "Diamond",
    status: "Best Seller",
    title: "Al Nasr Special Hajj 30 Days",
    prise: "$20,00",
    unit: "person",
    benefits: ["airplane", "hotel", "ticket", "visa"],
  },
  {
    id: 4,
    type: "Diamond",
    status: "Best Seller",
    title: "Al Nasr Special Hajj 30 Days",
    prise: "$20,00",
    unit: "person",
    benefits: ["airplane", "hotel", "ticket", "visa"],
  },
  {
    id: 5,
    type: "Diamond",
    status: "Best Seller",
    title: "Al Nasr Special Hajj 30 Days",
    prise: "$20,00",
    unit: "person",
    benefits: ["airplane", "hotel", "ticket", "visa", "vaccine"],
  },
  { id: 6, type: "soon" },
];

const Program = () => {
  return (
    <ContentWrapper>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h1 className="text-title">
            Al Nasr Special Umrah and Hajj Packages
          </h1>
          <p className={clsx(styles.desc, "text-description")}>
            Choose your package according to your needs, guaranteed cheap and
            complete
          </p>
        </div>
        <div className={styles.programContainer}>
          {program.map((item, i) => {
            return item.type !== "soon" ? (
              <div className={styles.card} key={i}>
                <img
                  className={styles.cardImage}
                  src="/images/program/program-1.png"
                  alt=""
                />
                <div className={styles.cardLabel}>
                  <span className={styles.label}>Bronze</span>
                  <div className={styles.labelBudget}>
                    <span>Best Seller</span>
                  </div>
                </div>
                <h3 className={styles.cardTitle}>
                  Al Nasr Special Umrah 9 Days
                </h3>
                <h2 className={styles.cardPrice}>
                  $ 1,950 / <span>person</span>
                </h2>
                <div className={styles.benefits}>
                  {item.benefits?.map((item, i) => (
                    <Icon key={i} type={item} />
                  ))}
                </div>
                <button className={clsx("btn-outlined", styles.buttonSm)}>
                  View Detail
                </button>
              </div>
            ) : (
              <div className={styles.card} key={i}>
                <div className={styles.emptyCard}>
                  <span>Soon Program</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Program;
