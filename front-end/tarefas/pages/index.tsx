import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import axios from "axios"
import styles from '../styles/Home.module.css'
import Layout from '../components/UI/Layout/Layout'

const Home: NextPage = () => {

  const [key, setKey] = useState(null)

  const click = ()=>{

    setKey(true)
    setTimeout(() => {
      
      setKey(false)
    }, 2200);
  }

  return (
    <Layout>

      <div className={styles.main}>
        <div className={styles.logo}>
          <span>Run Fast List</span>
        </div>
        <div className={styles.corpo}>
          <p>Write down your tasks and never forget your appointments</p>
        </div>
      </div>
      
    </Layout>
  )
}

export default Home
