import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import styles from './Header.module.scss'
import { FaBasketShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
const Header = () => {
  return (
    <div className={styles.headerContainer}>
        <h1>Villa</h1>
        <div className={styles.hamburgerMenu}>
            <GiHamburgerMenu/>
            <FaBasketShopping/>
            <CiHeart/>
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>


        </div>
      
    </div>
  )
}

export default Header
