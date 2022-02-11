import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/OrderDetails.module.scss";

const OrderDetails = ({ total, createOrder, setCash }) => {
  const [customer, setCustomer] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const handleClick = () => {
    if (customer || phoneNumber || address) {
      alert("Missing some field");
    } else {
      createOrder({ customer, address, total, method: 0 });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setCash(false)} className={styles.close}>
          <FontAwesomeIcon
            icon={faTimes}
            width="100%"
            height="100%"
            color="white"
          />
        </span>
        <h1 className={styles.title}>You will pay ${total} after delivery.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Your FullName</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Justin Bieber"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input
            className={styles.input}
            type="text"
            placeholder="+84 123 456 789"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <textarea
            row={5}
            type="text"
            className={styles.textarea}
            placeholder="TP. Ho Chi Minh"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          ORDER
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
