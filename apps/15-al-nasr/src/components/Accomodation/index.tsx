import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import styles from "./accomodation.module.css";
import clsx from "clsx";
import Icon from "../Icon";

const Accomodation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetRight, setOffsetRight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setOffsetRight(containerRef.current?.offsetLeft);
    }
  }, [containerRef]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.left}>
        <h2 className={clsx(styles.title)}>Airways Acomodation</h2>
        <p className={clsx(styles.desc, "text-description")}>
          We cooperate with several airlines for Umrah and Hajj
        </p>
        <div className={styles.budget}>
          <Icon type="star" />
          <span className={styles.textBudget}>5.0 Rating</span>
        </div>
      </div>
      <div className={styles.right}>
        <div
          className={styles.slidesWrapper}
          style={{ right: `-${offsetRight}px` }}
        >
          <Swiper
            slidesPerView={4}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            // loop={true}
            speed={3000}
            modules={[Autoplay]}
          >
            {[
              "garuda",
              "lion-air",
              "saudi",
              "fly-emirat",
              "lion-air",
              "qtr-airways",
              "garuda",
              "fly-emirat",
            ].map((item, i) => (
              <SwiperSlide key={i}>
                <img src={`/images/logo/${item}.png`} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
