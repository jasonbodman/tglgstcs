import Image from 'next/image'

import styles from '../styles/pageHero.module.css'

const pageHero = ({ hero, title, tagline, content }) => {
    return (

      <div className={styles.heroWrapper} style={{backgroundImage: `url('${hero}')`,}}
      >
        <div className={styles.heroBg}>
          <div className={styles.heroLeft}>
            <div>
              <span className={styles.pageHeadline}>{title}</span>
            </div>
            <div>
              <span className={styles.pageTagline}>{tagline}</span>
            </div>
              
          </div>
        </div>

      </div>      
  )
  }
  
  export default pageHero 
  