import Image from "next/image";
import Link from "next/link";
import telephone from "../public/img/telephone.png";
import cart from "../public/img/cart.png";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Navbar.module.scss";
const Navbar = () => {
  const [sidebar, setSideBar] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__item}>
          <div className={styles.container__callBtn}>
            <Image src={telephone} alt="telephone" width="32" height="32" />
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW!</div>
            <div className={styles.text}>0782 776 322</div>
          </div>
        </div>

        <div className={styles.container__item}>
          <ul className={styles.list}>
            <Link href="/" passHref>
              <li className={styles.listItem}>Homepage</li>
            </Link>

            <Link href="/products" passHref>
              <li className={styles.listItem}>Products</li>
            </Link>

            <li className={styles.listItem}>Menu</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contact</li>
          </ul>
        </div>
        <div className={styles.container__item}>
          <Link href="/cart" passHref>
            <div className={styles.cart} onClick={() => setSideBar(false)}>
              <Image src={cart} alt="carte" width="40" height="40" />
              <div className={styles.counter}>{quantity}</div>
            </div>
          </Link>
          <div className={styles.bars} onClick={() => setSideBar(!sidebar)}>
            <FontAwesomeIcon icon={faBars} className={styles.icon} />
          </div>
        </div>
      </div>
      {sidebar && (
        <div className={styles.sidebar}>
          <ul className={styles.list}>
            <Link href="/" passHref>
              <li className={styles.listItem} onClick={() => setSideBar(false)}>
                Homepage
              </li>
            </Link>

            <Link href="/products" passHref>
              <li className={styles.listItem} onClick={() => setSideBar(false)}>
                Products
              </li>
            </Link>

            <li className={styles.listItem} onClick={() => setSideBar(false)}>
              Menu
            </li>
            <li className={styles.listItem} onClick={() => setSideBar(false)}>
              Blog
            </li>
            <li className={styles.listItem} onClick={() => setSideBar(false)}>
              Contact
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
