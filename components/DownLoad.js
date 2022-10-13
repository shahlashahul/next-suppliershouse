import React from 'react'
import styles from '../styles/DownLoad.module.css'
import Image from 'next/image'
import Link from 'next/link'
function DownLoad() {
  return (
    <div className={styles.container}>
      <h1 className={styles.containerWrapper}>Download the App</h1>
      <p className={styles.containerWrapper}>By few clicks, order your needs at any time and we are at your service</p>
      <div className={styles.image}>
      <Link href='/appstore'><Image  src={'/appstore.png'} width='150px' height='100px'/></Link>
     <Link href='/playstore'><Image  src={'/playstore.png'} width='150px' height='100pxpx'/></Link> 
    </div>
    </div>
  )
}

export default DownLoad
