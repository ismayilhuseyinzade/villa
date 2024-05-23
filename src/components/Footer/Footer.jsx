import React from "react";
import styles from "./Footer.module.scss";
import { CiHeart } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiGoogledisplayandvideo360 } from "react-icons/si";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <h4>
        Copyright ©2024 All rights reserved | This template is made with{" "}
        <CiHeart className={styles.heart} /> by Colorlib
      </h4>
      <div>
        <span><FaTwitter /></span>
        <span><FaFacebookF /></span>
        <span><SiGoogledisplayandvideo360/></span>
      </div>
    </div>
  );
};

export default Footer;
