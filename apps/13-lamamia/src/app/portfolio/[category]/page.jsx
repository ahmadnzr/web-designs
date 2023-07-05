import React from "react";
import Image from "next/image";

import styles from "./page.module.css";
import Button from "@/components/Button/Button";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Lorem, ipsum dolor.</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            tempora officiis, fuga consequatur quasi exercitationem omnis
            eveniet enim obcaecati eius. Ab mollitia quos debitis deleniti atque
            tenetur, laudantium eos vitae minus assumenda iste sequi eaque
            consectetur odit sapiente tempore quod commodi cumque suscipit
            placeat! Corrupti quasi aspernatur dignissimos quos adipisci?
          </p>
          <Button text="See More" url="" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="/websites.jpg" alt="" fill />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Lorem, ipsum dolor.</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            tempora officiis, fuga consequatur quasi exercitationem omnis
            eveniet enim obcaecati eius. Ab mollitia quos debitis deleniti atque
            tenetur, laudantium eos vitae minus assumenda iste sequi eaque
            consectetur odit sapiente tempore quod commodi cumque suscipit
            placeat! Corrupti quasi aspernatur dignissimos quos adipisci?
          </p>
          <Button text="See More" url="" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="/websites.jpg" alt="" fill />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Lorem, ipsum dolor.</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            tempora officiis, fuga consequatur quasi exercitationem omnis
            eveniet enim obcaecati eius. Ab mollitia quos debitis deleniti atque
            tenetur, laudantium eos vitae minus assumenda iste sequi eaque
            consectetur odit sapiente tempore quod commodi cumque suscipit
            placeat! Corrupti quasi aspernatur dignissimos quos adipisci?
          </p>
          <Button text="See More" url="" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="/websites.jpg" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default Category;
