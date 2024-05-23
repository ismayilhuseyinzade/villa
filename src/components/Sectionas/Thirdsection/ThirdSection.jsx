import React from "react";
import styles from "./ThirdSection.module.scss";
import hotelImg from './../../../images/slider-4.jpg'

const ThirdSection = () => {
  return (
    <div className={styles.thirdSection}>
      <h1><em>A gorgeous place to enjoy your life.</em></h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
        iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum
        voluptate id porro, culpa maiores quis, blanditiis laboriosam alias.
        Sed.
      </p>
      <div>
        <img src={hotelImg} alt="" />
      </div>
    </div>
  );
};

export default ThirdSection;
