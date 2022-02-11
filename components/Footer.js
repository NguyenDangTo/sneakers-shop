import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__item}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62694.933383631!2d106.71814490517781!3d10.854608470658158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d85e042bf04b%3A0xbb26baec1664394d!2zVGjhu6cgxJDhu6ljLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1644223558515!5m2!1svi!2s"
          allowFullScreen={true}
          loading="lazy"
          className={styles.iframe}
        ></iframe>
      </div>
      <div className={styles.container__item}>
        <div className={styles.card}>
          <div className={styles.motto}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            impedit quam beatae saepe cumque non ipsam labore consequuntur ipsa
            officia.
          </div>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR SHOP !</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit.
            <br /> Lorem, ipsum dolor.
            <br /> Lorem, ipsum dolor.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit.
            <br /> Lorem, ipsum dolor.
            <br /> Lorem, ipsum dolor.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit.
            <br /> Lorem, ipsum dolor.
            <br /> Lorem, ipsum dolor.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit.
            <br /> Lorem, ipsum dolor.
            <br /> Lorem, ipsum dolor.
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 8:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 9:00 - 19:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
