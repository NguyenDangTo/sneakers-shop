import axios from "axios";
import React from "react";
import { useState } from "react";
import styles from "../styles/Products.module.scss";
import ProductCard from "../components/ProductCard";

const Products = ({ products }) => {
  const [brand, setBrand] = useState("all");

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.brandContainer}>
          {brand === "all" ? (
            <div
              className={`${styles.brand} ${styles.active}`}
              onClick={() => setBrand("all")}
            >
              All
            </div>
          ) : (
            <div className={styles.brand} onClick={() => setBrand("all")}>
              All
            </div>
          )}

          {brand === "adidas" ? (
            <div
              className={`${styles.brand} ${styles.active}`}
              onClick={() => setBrand("adidas")}
            >
              Adidas
            </div>
          ) : (
            <div className={styles.brand} onClick={() => setBrand("adidas")}>
              Adidas
            </div>
          )}

          {brand === "nike" ? (
            <div
              className={`${styles.brand} ${styles.active}`}
              onClick={() => setBrand("nike")}
            >
              Nike
            </div>
          ) : (
            <div className={styles.brand} onClick={() => setBrand("nike")}>
              Nike
            </div>
          )}

          {brand === "vans" ? (
            <div
              className={`${styles.brand} ${styles.active}`}
              onClick={() => setBrand("vans")}
            >
              Vans
            </div>
          ) : (
            <div className={styles.brand} onClick={() => setBrand("vans")}>
              Vans
            </div>
          )}

          {brand === "jordan" ? (
            <div
              className={`${styles.brand} ${styles.active}`}
              onClick={() => setBrand("jordan")}
            >
              Jordan
            </div>
          ) : (
            <div className={styles.brand} onClick={() => setBrand("jordan")}>
              Jordan
            </div>
          )}

          {brand === "puma" ? (
            <div
              className={`${styles.brand} ${styles.active}`}
              onClick={() => setBrand("puma")}
            >
              PUMA
            </div>
          ) : (
            <div className={styles.brand} onClick={() => setBrand("puma")}>
              PUMA
            </div>
          )}

          {brand === "converse" ? (
            <div
              className={`${styles.brand} ${styles.active}`}
              onClick={() => setBrand("converse")}
            >
              Converse
            </div>
          ) : (
            <div className={styles.brand} onClick={() => setBrand("converse")}>
              Converse
            </div>
          )}
        </div>

        <div className={styles.itemContainer}>
          {brand === "all" &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}

          {brand === "adidas" &&
            products
              .filter((product) => product.brand === "adidas")
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}

          {brand === "nike" &&
            products
              .filter((product) => product.brand === "nike")
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}

          {brand === "vans" &&
            products
              .filter((product) => product.brand === "vans")
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}

          {brand === "jordan" &&
            products
              .filter((product) => product.brand === "jordan")
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}

          {brand === "puma" &&
            products
              .filter((product) => product.brand === "puma")
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}

          {brand === "converse" &&
            products
              .filter((product) => product.brand === "converse")
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const productRes = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      products: productRes.data,
    },
  };
};

export default Products;
