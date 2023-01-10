import styles from '../styles/pageHero.module.css'

import {urlFor} from '../lib/imageBuilder'


const pageHero = ({ hero, title, tagline }) => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.heroWrapper} >
        <div className={styles.heroWrapperImage} style={{backgroundImage: `url('${urlFor(hero).url()}')`,}}/>
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
      </div>
       
  )
  }
  
  export default pageHero 
  