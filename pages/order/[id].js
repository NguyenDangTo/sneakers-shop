import React from "react";
import axios from "axios";
import Image from "next/image";
import styles from "../../styles/Order.module.scss";

const Order = ({ order }) => {
  const status = 0;
  const statusClass = (index) => {
    if (index - order.status < 1) {
      return styles.done;
    }
    if (index - order.status === 1) {
      return styles.inProgress;
    }
    if (index - order.status > 1) {
      return styles.undone;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
              <tr className={styles.trItem}>
                <td>
                  <span className={styles.id}>{order._id.slice(0, 10)}...</span>
                </td>
                <td>
                  <span className={styles.customer}>{order.customer}</span>
                </td>
                <td>
                  <span className={styles.address}>{order.address}</span>
                </td>
                <td>
                  <span className={styles.total}>${order.total}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width="30" height="30" alt="paid" />
            <span>Payment</span>
            <div className={styles.checked}>
              <Image
                src="/img/checked.png"
                width="20"
                height="20"
                alt="checked"
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" width="30" height="30" alt="paid" />
            <span>Preparing</span>
            <div className={styles.checked}>
              <Image
                src="/img/checked.png"
                width="20"
                height="20"
                alt="checked"
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" width="30" height="30" alt="paid" />
            <span>On the way</span>
            <div className={styles.checked}>
              <Image
                src="/img/checked.png"
                width="20"
                height="20"
                alt="checked"
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" width="30" height="30" alt="paid" />
            <span>Delivered</span>
            <div className={styles.checked}>
              <Image
                src="/img/checked.png"
                width="20"
                height="20"
                alt="checked"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>CART TOTAL: </h1>
          <div className={styles.totalText}>
            <b className={styles.totalText__title}>Subtotal: </b>${order.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalText__title}>Discount: </b>$00.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalText__title}>Total: </b>${order.total}
          </div>
          <button disabled className={styles.button}>
            PAID!!
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: {
      order: res.data,
    },
  };
};

export default Order;
