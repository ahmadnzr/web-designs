import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data?.map((item) => (
        <Link
          className={styles.container}
          href={`/blog/${item.id}`}
          key={item.id}
        >
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
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
