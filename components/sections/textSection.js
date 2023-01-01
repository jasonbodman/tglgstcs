import SectionHeader from "../sectionHeader"

import styles from '../../styles/sections.module.css'

const textSection = (props) => {
    const {heading, content} = props
    
    return (
        <div className={styles.sectionWrapper}>

            {heading ? <SectionHeader title={heading} /> : null}

            <div className={styles.textWrapper}>
                <p className={styles.textContent}>{content}</p>
            </div>
        </div>

  )
  }
  
  export default textSection