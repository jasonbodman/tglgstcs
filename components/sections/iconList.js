import styles from '../../styles/iconList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const iconList = ({ icons }) => {
    return (
      <div className={styles.listWrapper}>
        
        
        <div className={styles.listItem}>
            <div className={styles.itemIconContainer}>
                <div className={styles.itemIcon}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
            </div>
            <div className={styles.itemName}>
                <p>{icons[0].title}</p>
                <p>item</p>
            </div>
            <div className={styles.itemName}>
                <p>item</p>
            </div>
            <div className={styles.itemName}>
                <p>item</p>
            </div>
        </div>

      </div>
  )
  }
  
  export default iconList 

