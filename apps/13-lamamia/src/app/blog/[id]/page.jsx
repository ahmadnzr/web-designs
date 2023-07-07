import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    throw notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image
              src="/1.png"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Johndev1</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/illustration.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure
          molestias nihil enim architecto quo labore fugiat, expedita
          reiciendis, debitis necessitatibus id velit at voluptas obcaecati
          <br />
          <br />
          delectus voluptatibus consequuntur quia, voluptatem fuga odit maiores
          officia repellendus? Voluptates placeat tenetur ipsum laborum esse
          repellat tempore porro? Fugit facilis recusandae quaerat eveniet!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
