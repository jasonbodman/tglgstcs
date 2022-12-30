import Link from 'next/link'
import styles from '../../styles/iconList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const iconList = ({ icons }) => {
    return (
      <div className={styles.listWrapper}>
        
        {icons && (
            <div>
            {icons.map(icon, key => 

            <div className={styles.listItem} key={key}>
                <div className={styles.itemIconContainer}>
                    <div className={styles.itemIcon}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>
                <div className={styles.itemName}>
                    <Link href={`/services/${icon.slug}`}>
                        <p>{icon.title}</p>
                    </Link>
                </div>
            </div>
            
            )}
            </div>
        )}
        </div>
            



        
  )
  }
  
  export default iconList