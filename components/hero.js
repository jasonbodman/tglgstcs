import Image from 'next/image'

import styles from '../styles/hero.module.css'

const Hero = () => {
    return (
      <div className={styles.heroWrapper}>
        <div className={styles.heroRight}>
            <Image className={styles.heroLogo} src="/images/TOGOLOGISTICS.png" width={258} height={149} />
            <span className={styles.heroHeadline}><span className={styles.heroHeadlineBlue}>Harness</span><br /> the power<br /> of <span className={styles.heroHeadlineBlue}>TOGO</span> and lead the pack</span>
            </div>
      </div>
  )
  }
  
  export default Hero 
  