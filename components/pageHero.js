import Image from 'next/image'

import styles from '../styles/pageHero.module.css'

import client from "../client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}


const pageHero = ({ hero, title, tagline, content }) => {
    return (

      <div className={styles.heroWrapper} style={{backgroundImage: `url('${urlFor(hero).width(1000)}')`,}}
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
  