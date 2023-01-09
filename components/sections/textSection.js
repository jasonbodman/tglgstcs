import {PortableText} from '@portabletext/react'

import SectionHeader from "../sectionHeader"
import styles from '../../styles/sections.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";

const components = {
    block: {
        heading: ({children}) => (
            <h1 className={styles.textHeader}>{children}</h1>
            ),            
        normal: ({children}) => <p className={styles.textContent}>{children}</p>
    }
}

const textSection = (props) => {
    const {heading, sectionAlignment, content} = props
    
    return (
        <div className={styles.sectionWrapper}>

            <div className={styles.sectionHeaderWrapper}>
                {heading ? <SectionHeader title={heading} /> : null}
            </div>

            <div className={styles.textWrapper} style={{textAlign: sectionAlignment}}>
                <PortableText value={content} components={components}/>
            </div>
        </div>

  )
  }
  
  export default textSection