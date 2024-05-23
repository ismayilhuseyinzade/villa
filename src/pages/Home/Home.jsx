import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Product from '../../components/Products/Product'
import FirstSection from '../../components/Sectionas/Firstsection/FirstSection'
import ThirdSection from '../../components/Sectionas/Thirdsection/ThirdSection'
import VizitSection from '../../components/Sectionas/VizitSection/VizitSection'
import styles from './Home.module.scss'

const Home = () => {



  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then(res=>{
      setData(res.data.products)
    })
  },[])



  return (
    <>
      <Header/>
      <FirstSection/>
      <VizitSection/>
      <ThirdSection/>


      <div className={styles.container}>
        <div className={styles.products}>
          {data && data.map(item=> <Product item = {item}/>)}

        </div>
      </div>





      <Footer/>
    </>
  )
}

export default Home
