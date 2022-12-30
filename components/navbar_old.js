
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/navbar.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({logo, navigation}) => {
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
                    <li className={styles.navItemParent}>
                        <Link href="/services">
                            Services&nbsp;<FontAwesomeIcon className={styles.blueArrow} icon={faCaretDown} />
                        </Link>
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

    