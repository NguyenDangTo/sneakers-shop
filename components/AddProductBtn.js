import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/AddProductBtn.module.scss";

const AddProductBtn = ({ setClose }) => {
  return (
    <div className={styles.container} onClick={() => setClose(false)}>
      Add New Product
    </div>
  );
};

export default AddProductBtn;
