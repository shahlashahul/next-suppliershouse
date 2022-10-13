import React from 'react'
import styles from '../styles/Card.module.css'
import Image from 'next/image'
function Card() {
  return (
    <div className={styles.container}>
    <div className={styles.card}>
        <Image className={styles.image} src={'/blog_1.jpg'} width='729px' height='399px'/>
        
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, veniam?Lorem ipsum dolor sit amet.</p>
       
       </div>
    <div className={styles.card}>
    <Image className={styles.image} src={'/blog_2.jpg'} width='729px' height='399px'/>
    
    
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, veniam?Lorem ipsum dolor sit amet.</p>
        </div>
  
   <div className={styles.card}>
    <Image className={styles.image} src={'/blog_3.jpg'} width='729px' height='399px'/>
    
   
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, veniam?Lorem ipsum dolor sit amet.</p>
        
   </div>
   <div className={styles.card}>
    <Image className={styles.image} src={'/blog_4.jpg'} width='729px' height='399px'/>
    
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, veniam?Lorem ipsum dolor sit amet.</p>
        </div>
  
   <div className={styles.card}>
    <Image className={styles.image} src={'/blog_5.jpg'} width='729px' height='399px'/>
    
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, veniam?Lorem ipsum dolor sit amet.</p>
        </div>
   
   </div>
  )
}

export default Card
