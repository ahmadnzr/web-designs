import React from "react";
import clsx from "clsx";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ContentWrapper from "../../layouts/MainLayout";
import Icon from "../Icon";

import styles from "./review.module.css";

const Review = () => {
  return (
    <div className={styles.container}>
      <ContentWrapper>
        <div className={styles.top}>
          <h1 className={clsx("text-title", styles.title)}>
            Testimonials from our customers
          </h1>
          <p className={clsx("text-description", styles.desc)}>
            We have 100.000+ customers, here are our customer testimonials
          </p>
        </div>
      </ContentWrapper>
      <div className={styles.content}>
        <div className={styles.row}>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
              reverseDirection: true,
            }}
            loop={true}
            speed={15000}
            modules={[Autoplay]}
          >
            {[1, 1, 1, 1, 1, 1, 1].map((item, i) => (
              <SwiperSlide key={i}>
                <div className={styles.card}>
                  <div className={styles.cardLeft}>
                    <img
                      src="images/user/user1.png"
                      alt=""
                      className={styles.cardImg}
                    />
                    <div className={styles.budget}>
                      <Icon type="star" />
                      <span className={styles.textBudget}>5.0</span>
                    </div>
                  </div>
                  <div className={styles.cardRight}>
                    <div className={styles.budget}>
                      <span className={styles.textBudget}>Alnasr Umrah</span>
                    </div>
                    <h3 className={styles.cardTitle}>Humaira Khaira</h3>
                    <p className={styles.cardDesc}>
                      I am very satisfied with Al Nasr Travel&apos;s service,
                      starting from when we arrived in Saudi until we returned
                      to Indonesia. We provide very good service.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.row}>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={15000}
            modules={[Autoplay]}
          >
            {[1, 1, 1, 1, 1, 1, 1].map((item, i) => (
              <SwiperSlide key={i}>
                <div className={styles.card}>
                  <div className={styles.cardLeft}>
                    <img
                      src="images/user/user1.png"
                      alt=""
                      className={styles.cardImg}
                    />
                    <div className={styles.budget}>
                      <Icon type="star" />
                      <span className={styles.textBudget1}>5.0</span>
                    </div>
                  </div>
                  <div className={styles.cardRight}>
                    <div className={styles.budget}>
                      <span className={styles.textBudget2}>Alnasr Umrah</span>
                    </div>
                    <h3 className={styles.cardTitle}>Humaira Khaira</h3>
                    <p className={styles.cardDesc}>
                      I am very satisfied with Al Nasr Travel&apos;s service,
                      starting from when we arrived in Saudi until we returned
                      to Indonesia. We provide very good service.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
