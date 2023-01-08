import SectionHeader from "../sectionHeader"

import styles from '../../styles/sections.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight } from '@fortawesome/free-regular-svg-icons'

const valpropList = (props) => {
    const {heading, list} = props

    return (
      <div className={styles.sectionWrapper}>

        <div className={styles.sectionHeaderWrapper}>
            {heading ? <SectionHeader title={heading} /> : null}
        </div>

        <div className={styles.valpropWrapper}>

          <div className={styles.fullList}>
            {list.map((item, key) => (
              <div className={styles.listItem} key={key}>
                <div className={styles.itemBullet}>
                  <FontAwesomeIcon icon={faSquareCaretRight} style={{color: '#009BDF'}}/>
                </div>

                <div className={styles.itemContent}>
                  <p><span className={styles.itemTitle}>{item.itemTitle}:</span> {item.itemDescription}</p>
                </div>

              </div>
            ))}
          </div>
            
        </div>
      </div>
  )
  }
  
  export default valpropList 

