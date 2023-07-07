import React from "react";
import Image from "next/image";

import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import { items } from "./data";
import { notFound } from "next/navigation";

function getData(item) {
  const data = items[item];

  if (data) {
    return data;
  }

  return notFound();
}

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src={item.image} alt="" fill />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
