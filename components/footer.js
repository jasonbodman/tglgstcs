import styles from '../styles/footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        
        <footer className={styles.fullFooter}>
            <div className={styles.fullWidth}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image className={styles.footerLogo} src="/images/TOGO_LOGO_2.png" width={275} height={110} />
                    </Link>
                </div>

                <div className={styles.footerRight}>
                    <div className={styles.footerMenu}>
                        <ul className={styles.footerLinks}>
                            <li className={styles.footerItem}>
                                <Link href="/">
                                    Our Team
                                </Link>
                            </li>
                            <li className={styles.footerItem}>
                                <Link href="/services">
                                    Services
                                </Link>
                            </li>
                            <li className={styles.footerItem}>
                                <Link href="/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footerContact}>
                        <p className={styles.footerContactLine}><FontAwesomeIcon icon={faEnvelope} className={styles.footerIcon} /> email@harnesstogo.com</p>
                        <p className={styles.footerContactLine}><FontAwesomeIcon icon={faPhone} className={styles.footerIcon}/> (856) 555-5515</p>
                        <p className={styles.footerContactLine}><FontAwesomeIcon icon={faLocationDot} className={styles.footerIcon} /> 444 E. Ormond Ave, Haddon Township, NJ 08123</p>
                    </div>
                </div>
            </div>
           
            <div className={styles.fullWidth}>
                <div className={styles.copyright}>
                    &copy; 2022 Togo Logistics | All Rights Reserved | Sitemap
                </div>
            </div>
           
        </footer>
    )
  }
  
  
  export default Footer

    