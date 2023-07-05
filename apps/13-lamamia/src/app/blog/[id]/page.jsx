import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis vel suscipit ipsum quaerat mollitia qui repellat
            asperiores et deleniti maiores.
          </p>
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
