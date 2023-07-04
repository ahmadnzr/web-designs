import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

import AboutImage from "public/illustration.png";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={AboutImage} fill={true} alt="" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We ?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            id fuga. Cumque sint incidunt fugit, consectetur optio deserunt
            dicta repellat asperiores quam delectus iusto aliquam ad utlo Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Vero, nobis?
            cupiditate hic labore officiis quidem <br />
            <br />
            iste voluptatem qui quod at magnam? Illum itaque ea libero quisquam
            temporibus accusamus eligendi vel mollitia qui sint.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do ?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            id fuga. Cumque sint incidunt fugit, consectetur optio deserunt
            dicta repellat asperiores quam delectus iusto aliquam ad ut
            cupiditate hic labore officiis quidem <br />
            <br />
            iste voluptatem qui quod at magnam? Illum itaque ea libero quisquam
            temporibus accusamus eligendi vel mollitia qui sint.
            <br />
            <br />
            - Lorem ipsum dolor sit amet.
            <br />
            <br />
            - Lorem ipsum dolor sit amet.
            <br /> <br />- Lorem ipsum dolor sit amet.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
