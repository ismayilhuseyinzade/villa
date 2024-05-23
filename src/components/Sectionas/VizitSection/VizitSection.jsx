import React from 'react'
import styles from "./VizitSection.module.scss"
import FoodWines from './../../../images/img_1.jpg'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const VizitSection = () => {
  return (
    <div className={styles.vizitContainer}>
        <h4>YOU CAN VISIT</h4>
        <div className={styles.vizitImages}>
            <div className={styles.imgBox}>
                <img src={FoodWines} alt="" />
                <p>Food & Wines</p>
                <span>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaRegStarHalfStroke/>
                </span>

            </div>
            <div className={styles.imgBox}>
                <img src={FoodWines} alt="" />
                <p>Food & Wines</p>
                <span>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaRegStarHalfStroke/>
                </span>

            </div>
            <div className={styles.imgBox}>
                <img src={FoodWines} alt="" />
                <p>Food & Wines</p>
                <span>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaRegStarHalfStroke/>
                </span>

            </div>
            <div className={styles.imgBox}>
                <img src={FoodWines} alt="" />
                <p>Food & Wines</p>
                <span>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaRegStarHalfStroke/>
                </span>

            </div>
        </div>



    </div>
  )
}

export default VizitSection