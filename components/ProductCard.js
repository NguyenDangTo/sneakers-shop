import React from "react";
import Image from "next/image";
import styles from "../styles/ProductCard.module.scss";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${product._id}`} passHref>
        <Image src={product.img} width={500} height={500} alt="product" />
      </Link>
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>${product.sizes[0].size}</span>
    </div>
  );
};

export default ProductCard;
