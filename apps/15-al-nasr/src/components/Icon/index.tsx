import React from "react";
import styles from "./icon.module.css";

interface Props {
  type:
    | "airplane"
    | "buffer"
    | "facebook"
    | "food"
    | "health"
    | "hostel"
    | "hotel"
    | "instagram"
    | "membership"
    | "safety"
    | "ticket"
    | "twitter"
    | "vaccine"
    | "vehicle"
    | "visa"
    | "youtube"
    | "star";
}

const Icon = ({ type }: Props) => {
  switch (type) {
    case "airplane":
      return (
        <div className={styles.iconContainer}>
          <img src="/images/icons/airplane.png" alt="" />
        </div>
      );
    case "buffer":
      return (
        <div className={styles.iconContainer}>
          <img src="/images/icons/buffer.png" alt="" />
        </div>
      );
    case "facebook":
      return (
        <div className={styles.iconContainer}>
          <img src="/images/icons/facebook.png" alt="" />
        </div>
      );
    case "food":
      return (
        <div className={styles.iconContainer}>
          <img src="/images/icons/food.png" alt="" />
        </div>
      );
    case "health":
      return (
        <div className={styles.iconContainer}>
          <img src="/images/icons/health.png" alt="" />
        </div>
      );
    case "hostel":
      return (
        <div className={styles.iconContainer}>
          <img src="/images/icons/hostel.png" alt="" />
        </div>
      );
    case "hotel":
      return (
        <div className={styles.iconContainer}>
          <img src="/images/icons/hotel.png" alt="" />
        </div>
      );
    case "instagram":
      return (
        <div className={styles.iconContainer}>
          <img src="/images/icons/instagram.png" alt="" />
        </div>
      );
    case "membership":
      return (
        <div className={styles.iconContainer}>
          <img src="/images/icons/membership.png" alt="" />
        </div>
      );
    case "safety":
      return (
        <div className={styles.iconContainer}>
          <img src="/images/icons/safety.png" alt="" />
        </div>
      );
    case "ticket":
      return (
        <div className={styles.iconContainer}>
          <img src="/images/icons/ticket.png" alt="" />
        </div>
      );
    case "twitter":
      return (
        <div className={styles.iconContainer}>
          <img src="/images/icons/twitter.png" alt="" />
        </div>
      );
    case "vaccine":
      return (
        <div className={styles.iconContainer}>
          <img src="/images/icons/vaccine.png" alt="" />
        </div>
      );
    case "vehicle":
      return (
        <div className={styles.iconContainer}>
          <img src="/images/icons/vehicle.png" alt="" />
        </div>
      );
    case "visa":
      return (
        <div className={styles.iconContainer}>
          <img src="/images/icons/visa.png" alt="" />
        </div>
      );
    case "youtube":
      return (
        <div className={styles.iconContainer}>
          <img src="/images/icons/youtube.png" alt="" />
        </div>
      );
    case "star":
      return (
        <div className={styles.iconContainer}>
          <img src="/images/icons/star.png" alt="" />
        </div>
      );
  }
};

export default Icon;
