import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import styles from "../../styles/Product.module.scss";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ product }) => {
  const [size, setSize] = useState(product.sizes[0].size);
  const [price, setPrice] = useState(product.sizes[0].price);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleSize = (sizeIndex) => {
    if (product.sizes[sizeIndex] === undefined) {
      alert("SOLD OUT");
    } else {
      setSize(product.sizes[sizeIndex].size);
      setPrice(product.sizes[sizeIndex].price);
    }
  };

  const handleAdd = () => {
    dispatch(addProduct({ ...product, price, size, quantity }));
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={product.img}
            alt="product"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.title}</h1>
        <span className={styles.price}>${price}</span>
        <h3 className={styles.chooseSize}>Choose the size:</h3>
        <div className={styles.sizes}>
          {product.sizes.map((size, index) => (
            <div
              key={index}
              className={styles.size}
              onClick={() => handleSize(index)}
            >
              {size.size}
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            type="number"
            value={quantity}
            className={styles.quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button
            type="submit"
            className={styles.buttonAdd}
            onClick={handleAdd}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      product: res.data,
    },
  };
};

export default Product;
