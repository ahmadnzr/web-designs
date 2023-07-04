import React from "react";
import Image from "next/image";

import styles from "./page.module.css";
import Button from "@/components/Button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch </h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input
            type="text"
            name="name"
            id=""
            placeholder="name"
            className={styles.input}
          />
          <input
            type="text"
            name="email"
            id=""
            placeholder="email"
            className={styles.input}
          />
          <textarea
            className={styles.textarea}
            placeholder="message"
            cols={30}
            rows={10}
          />
          <Button url="" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
