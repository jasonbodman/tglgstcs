import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/navbar.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { urlFor } from '../lib/imageBuilder';

const Navbar = ({logo, navigation}) => {
    const [menuVis, setMenuVis] = React.useState('none');
    function mouseEnter() {
        setMenuVis('block')
    }

    function mouseLeave() {
        setMenuVis('none')
    }

    function closeMenu() {
        mouseLeave()
        document.getElementById("menuToggle").checked = false;
    }

    return (
        
        <nav className={styles.fullNav}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image className={styles.navLogo} src={urlFor(logo).url()} width={150} height={60} alt={logo.alt} priority={true}/>
                </Link>
            </div>

            <div className={styles.navMenu}>
                <div id={styles.menuToggle}>
                    <input type="checkbox" id="menuToggle" />
                    <span></span>
                    <span></span>
                    <span></span>

                    <ul className={styles.navLinks}>
                        <li className={styles.navItem}>
                            <Link href="/about">
                                Our Team
                            </Link>
                        </li>
                        <li className={styles.navItemParent} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={closeMenu}>
                            <FontAwesomeIcon className={styles.bluePlus} icon={faSquarePlus} /><Link href="/services">Services</Link>&nbsp;<FontAwesomeIcon className={styles.blueArrow} icon={faCaretDown} />
                                <div className={styles.dropdown} style={{display: `${menuVis ? menuVis : 'none' }`}} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={closeMenu}>
                                    <ul className={styles.navItemChildList}>
                                    {navigation.map((item, key) => (
                                        <li className={styles.navItemChild} key={key}>
                                            <Link href={`/services/${item.slug.current}`} onClick={closeMenu}>
                                                <p style={{whiteSpace: 'nowrap',}}>{item.title}</p>
                                            </Link>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
           
        </nav>
    )
  }
  
  
  export default Navbar

    