import React from "react";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/AddPanel.module.scss";

const AddPanel = ({ setClose }) => {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState({ size: "", price: "" });
  const [sizes, setSizes] = useState([]);

  const handleSizeInput = (e) => {
    setSize({ ...size, [e.target.name]: e.target.value });
  };

  const handleSize = () => {
    if (size.size !== "" && size.price !== "") {
      setSizes([...sizes, size]);
    }
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "sneakers");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/nguyendangto/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newProduct = {
        title,
        brand,
        sizes,
        img: url,
      };
      await axios.post("http://localhost:3000/api/products", newProduct);
      setClose(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          <FontAwesomeIcon
            icon={faTimes}
            width="100%"
            height="100%"
            color="white"
          />
        </span>
        <h1 className={styles.title}>Add New Product</h1>

        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input
            type="file"
            className={styles.input}
            onChange={(e) => setFile(e.target.files[0])}
          ></input>
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            type="text"
            className={styles.input}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Brand</label>
          <input
            type="text"
            className={styles.input}
            onChange={(e) => setBrand(e.target.value)}
          ></input>
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Sizes</label>
          <div className={styles.sizesContainer}>
            <input
              type="number"
              placeholder="Size"
              name="size"
              className={styles.input}
              onChange={(e) => handleSizeInput(e)}
            ></input>
            <input
              type="number"
              placeholder="Price"
              name="price"
              className={styles.input}
              onChange={(e) => handleSizeInput(e)}
            ></input>
            <button className={styles.button} onClick={handleSize}>
              Add
            </button>
          </div>
          <div className={styles.sizesItems}>
            {sizes.map((option) => (
              <span key={option.size} className={styles.sizesItem}>
                {option.size}: {option.price}$
              </span>
            ))}
          </div>
        </div>
        <button className={styles.createBtn} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default AddPanel;
