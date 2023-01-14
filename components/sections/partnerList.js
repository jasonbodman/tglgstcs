import Image from "next/image"

import SectionHeader from "../sectionHeader"
import styles from '../../styles/sections.module.css'

import {urlFor} from '../../lib/imageBuilder'

const partnerList = (props) => {
    const {heading, fullWidthImage, subtext, content} = props

    return (
        <div className={styles.sectionWrapper}>
            {heading ? 
                <div className={styles.sectionHeaderWrapper}>
                <SectionHeader title={heading} /> 
                </div>
            : null}

            <div className={styles.partnerListWrapper}>
                <div className={styles.partnerFullImage}>
                    <div className={styles.partnerFullImageWrapper}>
                        <Image className={styles.partnerFullImageContent} src={urlFor(fullWidthImage).url()} alt={fullWidthImage.altText} fill />
                    </div>
                </div>
                
                {subtext ? 
                    <div className={styles.subtextWrapper}>
                        <p className={styles.subtext}>{subtext}</p>
                    </div>
                : null }

                {content ? 
                    <div className={styles.listWrapper}>
                        {content.map(({ image, key }) => (
                            <div key={key} className={styles.partnerImageWrapper}>
                                <Image className={styles.partnerImage} src={urlFor(image).width(300).url()} alt={image.altText} fill/>
                            </div>
                        ))}
                    </div>
                : null }
            </div>
        </div>

  )
  }
  
  export default partnerList