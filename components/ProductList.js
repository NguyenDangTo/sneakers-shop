import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import styles from "../styles/ProductList.module.scss";
const ProductList = ({ productList }) => {
  const displayProducts = productList.slice(0, 10);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best Sneaker In Viet Nam</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
        repellat libero! Delectus ipsa illum a nihil quia quas incidunt, quae
        neque consequatur hic aut mollitia sequi libero, excepturi in nemo
        provident, minima cumque nobis natus reiciendis voluptates similique
        cupiditate eius. Quod, at ipsa? Cumque, optio. Cupiditate natus expedita
        voluptatum consequatur!
      </p>
      <div className={styles.wrapper}>
        {displayProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className={styles.more}>
        <Link href="/products" passHref>
          MORE
        </Link>
      </div>
    </div>
  );
};
export default ProductList;
