import Image from 'next/image'

import styles from '../styles/Home.module.css'

const Hero = () => {
    return (
      <div className={styles.heroWrapper}>
        <Image 
          className={styles.heroBgImage} 
          src="/images/wolf_hero_3600_1450.jpg" 
          fill 
          priority 
/>
        <div className={styles.heroRight}>
          <div className={styles.heroLogoContainer}>
            <h1 className={styles.heroTextContent}>A Supply Chain Resource Group</h1>
          </div>
        </div>
      </div>
  )
  }
  
  export default Hero 
  