import styles from '../styles/navbar.module.css'
import HamburgerIcon from './icons/Hamburger'
import Link from 'next/link'
import Image from 'next/image'



function Navbar() {
    return (
        
        <nav className={styles.fullNav}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image className={styles.navLogo} src="/images/TOGO_LOGO_2.png" width={175} height={70} />
                </Link>
            </div>

            <div className={styles.navMenu}>
                <ul className={styles.navLinks}>
                    <li className={styles.navItem}>
                        <Link href="/">
                            Our Team
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/services">
                            Services
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

    