import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project</title>
        <meta property="og:title" content="New Project" />
      </Helmet>
      <div className={styles['container1']}>
        <div className={styles['container2']}></div>
      </div>
    </div>
  )
}

export default Home
