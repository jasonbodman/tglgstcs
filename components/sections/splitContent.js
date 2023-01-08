import Image from "next/image"
import {PortableText} from '@portabletext/react'

import SectionHeader from "../sectionHeader"
import styles from '../../styles/sections.module.css'

import {urlFor} from '../../lib/imageBuilder'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight } from '@fortawesome/free-regular-svg-icons'

const components = {
    block: {
        heading: ({children}) => (
            <h1 className={styles.splitHeader}>{children}</h1>
            ),            
        normal: ({children}) => <p>{children}</p>
    },
    list: {
        bullet: ({children}) => (
            <div>
                <ul className={styles.splitContentList}>
                {children.map((item, key) => (
                <div className={styles.splitListItem} key={key}>
                    <div className={styles.splitItemBullet}>
                <FontAwesomeIcon icon={faSquareCaretRight} style={{color: '#009BDF'}}/>
                </div>

                <div className={styles.splitItemContent}>
                {item}
                </div>

                </div>
                ))}
                </ul>
            </div>
            
        ),
    }
}

const splitContent = (props) => {
    const {heading, contentSetup, leftTextContent, leftImageContent, rightTextContent, rightImageContent} = props
    return (
        <div className={styles.sectionWrapper}>

            {heading ? 
                <div className={styles.sectionHeaderWrapper}>
                <SectionHeader title={heading} /> 
                </div>
            : null}

            <div className={styles.splitWrapper}>
                <div className={styles.leftWrapper}>
                    { contentSetup == 'TLTR' || contentSetup == 'TLIR' ? (
                        <PortableText value={leftTextContent} components={components}/>                        
                    ) : (
                        // ADD IMAGE HERE (urlFor)
                        <div className={styles.splitImageWrapper}>
                            <Image className={styles.splitImageContent} src={urlFor(leftImageContent).width(1000).url()} alt={leftImageContent.altText} fill />
                        </div>
                    )} 
                </div>
                
                <div className={styles.rightWrapper}>
                    { contentSetup == 'ILIR' || contentSetup == 'TLIR' ? (
                        
                        // ADD IMAGE HERE (urlFor)
                        <div className={styles.splitImageWrapper}>
                            <Image className={styles.splitImageContent} src={urlFor(rightImageContent).width(1000).url()} alt={rightImageContent.altText} fill />
                        </div>
                    ) : (
                        <PortableText value={rightTextContent} components={components}/>           
                    )} 
                </div>
            </div>

        </div>

  )
  }
  
  export default splitContent