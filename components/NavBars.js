import React, { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/NavBars.module.css'
import Image from 'next/image'
import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,faTimes,faCaretDown
} from "@fortawesome/free-solid-svg-icons";
library.add(faBars,faTimes,faCaretDown)


function NavBars() {
    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);
  return (
    <>
      <header className={styles.header}>
                <nav className={styles.navbar}>
                    <Link href='/'>
                    <Image src={'/logo.png'} alt='' width='150px' height='50px' className={styles.navlogo}/>
                    </Link>
                <ul className={isOpen === false ? 
                        styles.navmenu : styles.navmenu +' '+ styles.active}>
                    <li className={styles.navitem}>
                       <Link href='/Aboutus'>
                         <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>About Us</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/Offers'>
                          <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Offers</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/Card'>
                          <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Blog</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/Contactus'>
                         <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Contact Us</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/languages'>
                         <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Language <FontAwesomeIcon icon={['fas', 'caretdown']} /></a>
                        </Link>
                    </li>
                </ul>
                <div className={styles.menuIcon} onClick={openMenu}>
                    {isOpen===false ? <FontAwesomeIcon icon={['fas', 'bars']} />:<FontAwesomeIcon icon={['fas', 'times']}/> }
        </div>
                </nav>
            </header>
    </>
  )
}

export default NavBars
