import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/Admin.module.scss";

const Index = ({ products, orders }) => {
  const [productList, setProductList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["Preparing", "On the way", "Delivered", "Finished"];

  const handleDeleteProduct = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/products/" + id
      );
      setProductList(productList.filter((product) => product._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const handleDeleteOrder = async (id) => {
    try {
      const res = await axios.delete("http://localhost:3000/api/orders/" + id);
      setOrderList(orderList.filter((order) => order._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;
    console.log(item._id);
    try {
      if (currentStatus <= 3) {
        const res = await axios.put("http://localhost:3000/api/orders/" + id, {
          status: currentStatus + 1,
        });
        setOrderList([
          res.data,
          ...orderList.filter((order) => order._id !== id),
        ]);
      } else {
        handleDeleteOrder(id);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(orderList);
  return (
    <div className={styles.container}>
      {/* Product */}
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>ID</th>
              <th>Product</th>
              <th>Size</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {productList.map((product) => (
            <tbody key={product._id}>
              <tr>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt="product"
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>
                  {product.sizes.map((size) => (
                    <span key={size.size}>{size.size} </span>
                  ))}
                </td>
                <td>
                  {product.sizes.map((size) => (
                    <span key={size.price}>${size.price} </span>
                  ))}
                </td>
                <td>
                  <button
                    className={`${styles.button} ${styles.delete}`}
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      {/* Order */}
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th className={styles.status}>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          {orderList.map((order) => (
            <tbody key={order._id}>
              <tr>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>{order.method === 0 ? "Cash" : "Paid"}</td>
                <td>{status[order.status]}</td>
                <td>
                  <button
                    className={`${styles.button} ${styles.next}`}
                    onClick={() => handleStatus(order._id)}
                  >
                    Next
                  </button>
                  <button
                    className={`${styles.button} ${styles.delete}`}
                    onClick={() => handleDeleteOrder(order._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Index;

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");
  return {
    props: {
      products: productRes.data,
      orders: orderRes.data,
    },
  };
};
