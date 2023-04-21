import Image from "next/image"

import SectionHeader from "./sectionHeader"
import styles from '../styles/sections.module.css'
import globals from '../styles/globals.module.css'

import {urlFor} from '../lib/imageBuilder'

const affiliationList = (props) => {
    const {heading, intro, images} = props

    return (
        <div className={styles.sectionWrapper}>
            
            <div className={styles.sectionHeaderWrapper}>
            <SectionHeader title={heading} /> 
            </div>

            <div className={globals.contentWrapper}>
                <p className={globals.sectionIntro}>{intro}</p>

                <div className={styles.affiliationListWrapper}>                

                        {images.map(({ image, key }) => (
                            <div key={key} className={styles.affiliationImageWrapper}>
                                <Image className={styles.affiliationImage} src={urlFor(image).width(300).url()} alt={image.altText} fill/>
                            </div>
                        ))}
                </div>
            </div>
        </div>

  )
  }
  
  export default affiliationList