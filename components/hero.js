import Image from 'next/image'

import styles from '../styles/Home.module.css'

const Hero = () => {
    return (
      <div className={styles.heroWrapper}>
        <div className={styles.heroRight}>
          <div className={styles.heroLogoContainer}>
            <Image className={styles.heroLogo} src="/images/TOGOLOGISTICS.png" fill />
          </div>
        </div>
      </div>
  )
  }
  
  export default Hero 
  