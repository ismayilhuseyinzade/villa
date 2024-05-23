import React from 'react'
import styles from './FirstSection.module.scss'

const FirstSection = () => {
  return (
    <div className={styles.firstSection}>
        <h1>Welcome to Villa resort</h1>
        <p>Discover our world-class hotel & restaurant resort.</p>
        <div>
            <button>EXPLORE THE BEAUTY</button>
            <button className={styles.buttonLeft}>DOWNLOAD</button>
        </div>


    </div>
  )
}

export default FirstSection