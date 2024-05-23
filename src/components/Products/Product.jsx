import React from "react";
import styles from "./Product.module.scss";

const Product = ({ item }) => {
  return (
    <div className={styles.container}>
      <img src={item.thumbnail} alt="" />
      <div className={styles.titleBox}>
        <h5>{item.title}</h5>
        <p>${item.price}</p>
      </div>
    </div>
  );
};

export default Product;
