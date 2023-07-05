import React from "react";

import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link className={styles.container} href="/blog/testId">
        <div className={styles.imageContainer}>
          <Image
            src="/illustration.png"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            dolor.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe
            animi aut voluptates dicta iste porro ipsa ipsam fuga doloribus.
            Sunt perferendis sapiente repellendus, aliquam possimus quos
            voluptatum laboriosam minima.
          </p>
        </div>
      </Link>
      <Link className={styles.container} href="/blog/testId">
        <div className={styles.imageContainer}>
          <Image
            src="/illustration.png"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            dolor.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe
            animi aut voluptates dicta iste porro ipsa ipsam fuga doloribus.
            Sunt perferendis sapiente repellendus, aliquam possimus quos
            voluptatum laboriosam minima.
          </p>
        </div>
      </Link>
      <Link className={styles.container} href="/blog/testId">
        <div className={styles.imageContainer}>
          <Image
            src="/illustration.png"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            dolor.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe
            animi aut voluptates dicta iste porro ipsa ipsam fuga doloribus.
            Sunt perferendis sapiente repellendus, aliquam possimus quos
            voluptatum laboriosam minima.
          </p>
        </div>
      </Link>
      <Link className={styles.container} href="/blog/testId">
        <div className={styles.imageContainer}>
          <Image
            src="/illustration.png"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            dolor.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe
            animi aut voluptates dicta iste porro ipsa ipsam fuga doloribus.
            Sunt perferendis sapiente repellendus, aliquam possimus quos
            voluptatum laboriosam minima.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
