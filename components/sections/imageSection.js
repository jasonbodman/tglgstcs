import Image from "next/image"

import SectionHeader from "../sectionHeader"
import styles from '../../styles/sections.module.css'

import {urlFor} from '../../lib/imageBuilder'

const imageSection = (props) => {
    const {heading, image} = props

    return (
        <div className={styles.sectionWrapper}>

            {heading ? 
                <div className={styles.sectionHeaderWrapper}>
                <SectionHeader title={heading} /> 
                </div>
            : null}

            <div className={styles.imageWrapper}>
                <Image className={styles.imageContent} src={urlFor(image).width(1000).url()} alt={image.altText} fill />
            </div>
        </div>

  )
  }
  
  export default imageSection