import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
  return (
    <div className={styles.container}>
      <row className={styles.row}>
      <column className={styles.lap}>
      <Link href='/'>
            <Image src={'/logo.png'} alt='' width='150px' height='50px' className={styles.navlogo}/>
        </Link>
      </column>
      <column className={styles.mob}>
      <Link href='/'>
            <Image src={'/logo-vertical.png'} alt='' width='100px' height='150px' className={styles.navlogo}/>
        </Link>
      </column>
        <column className={styles.column}>
        <h1>Suppliers House</h1>
        <li><Link href={'/'}> Home</Link></li>
        <li><Link href={'/'}>About Us</Link></li>
        <li> <Link href={'/'}>Careers</Link></li>
        <li> <Link href={'/'}>Web Shop</Link></li>
        <li><Link href={'/'}>Add your business</Link></li>
        <li><Link href={'/'}>Contact Us</Link></li>
        </column>
        <column className={styles.column}>
        <h1>Our regions</h1>
        <li><Link href={'/'}> Dammam</Link></li>
        <li><Link href={'/'}>Jeddah</Link></li>
        <li> <Link href={'/'}>Riyadh</Link></li>
        <li> <Link href={'/'}>Al Khobar</Link></li>
        
        </column>
        <column className={styles.column}>
        <h1>Countries</h1>
        <li><Link href={'/'}> saudi</Link></li>
        <li><Link href={'/'}>Bahrain</Link></li>
       
        </column>
        <column className={styles.column}>
        <h1>Follow us on</h1>
        <li><Link href={'/'}>Face Book</Link></li>
        <li><Link href={'/'}>Twitter</Link></li>
        <li> <Link href={'/'}>Instagram</Link></li>
      
        
        </column>
        
      </row>
      <row className={styles.copy}>
        <column className={styles.copyright}>
        <li><Link href={'/'}>©2022 Suppliers House</Link></li>
        </column>
        <column className={styles.copyright}>
        <li><Link href={'/'}> Terms of use</Link></li>
        </column>
        <column className={styles.copyright}>
        <li><Link href={'/'}> Privacy policy</Link></li>
        </column>
        <column className={styles.copyright}>
        <li><Link href={'/'}>  FAQs</Link></li>
        </column>
        
      </row>
      

      
    </div>
  )
}

export default Footer
