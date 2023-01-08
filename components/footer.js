import styles from '../styles/footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

import {urlFor} from '../lib/imageBuilder'
import {phoneNumberBuilder} from '../lib/phoneNumber'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Footer({logo, footerText, phone, email, mail}) {
    const pnb = phoneNumberBuilder(phone)

    return (
        
        <footer className={styles.footerWrapper}>
            <div className={styles.fullFooter}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image className={styles.footerLogo} src={urlFor(logo).url()} width={275} height={110} />
                    </Link>
                </div>

                <div className={styles.footerRight}>
                    <div className={styles.footerMenu}>
                        <ul className={styles.footerLinks}>
                            <li className={styles.footerItem}>
                                <Link href="/about">
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
                        
                        <Link href={`tel:+1${phone}`}><p className={styles.footerContactLine}><FontAwesomeIcon icon={faPhone} className={styles.footerIcon}/> {pnb}</p></Link>

                        <Link href={`mailto:${email}`}><p className={styles.footerContactLine}><FontAwesomeIcon icon={faEnvelope} className={styles.footerIcon} /> {email}</p></Link>

                       <p className={styles.footerContactLine}><FontAwesomeIcon icon={faLocationDot} className={styles.footerIcon} /> {mail}</p>
                    </div>
                </div>
            </div>
           
            <div className={styles.fullWidth}>
                <div className={styles.copyright}>
                    {footerText} | Sitemap
                </div>
            </div>
           
        </footer>
    )
  }
  
  
  export default Footer

    