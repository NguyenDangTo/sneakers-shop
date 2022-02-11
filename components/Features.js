import React from "react";
import { useState } from "react";
import styles from "../styles/Feature.module.scss";
import Image from "next/image";
import arrLeft from "../public/img/arrowl.png";
import arrRight from "../public/img/arrowr.png";
import feature1 from "../public/img/feature1.jpg";
import feature2 from "../public/img/feature2.jpg";
import feature3 from "../public/img/feature3.jpg";

const Features = () => {
  const [index, setIndex] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "left") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "right") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer}>
        <Image
          src={arrLeft}
          layout="fill"
          alt="arrow-left"
          onClick={() => handleArrow("left")}
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        <div className={styles.imgContainer}>
          <Image
            className={styles.featureImg}
            src={feature1}
            layout="fill"
            alt="feature1"
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.featureImg}
            src={feature2}
            layout="fill"
            alt="feature2"
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.featureImg}
            src={feature3}
            layout="fill"
            alt="feature3"
          />
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <Image
          src={arrRight}
          layout="fill"
          alt="arrow-right"
          onClick={() => handleArrow("right")}
        />
      </div>
    </div>
  );
};

export default Features;
