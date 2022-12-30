import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/navbar.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({logo, navigation}) => {
    const [menuVis, setMenuVis] = React.useState('none');
    function mouseEnter() {
        console.log('CLICKED!')
        setMenuVis('block')
    }

    function mouseLeave() {
        console.log('Exit')
        setMenuVis('none')
    }
    return (
        
        <nav className={styles.fullNav}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image className={styles.navLogo} src={logo} width={150} height={60} />
                </Link>
            </div>

            <div className={styles.navMenu}>
                <ul className={styles.navLinks}>
                    <li className={styles.navItem}>
                        <Link href="/about">
                            Our Team
                        </Link>
                    </li>
                    <li className={styles.navItemParent} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        <div className={styles.subMenu} >
                            <Link href="/services">Services</Link>&nbsp;<span onMouseClick={mouseEnter}><FontAwesomeIcon className={styles.blueArrow} icon={faCaretDown} /></span>
                            <div className={styles.dropdown} style={{display: `${menuVis ? menuVis : 'none' }`}} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                                <div className={styles.navItemChildList}>
                                {navigation.map((item, key) => (
                                    <div className={styles.navItemChild} key={key}>
                                        <Link href={`/services/${item.slug.current}`}>
                                            <span style={{whiteSpace: 'nowrap'}}>{item.title}</span>
                                        </Link>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/contact">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
           
        </nav>
    )
  }
  
  
  export default Navbar

    