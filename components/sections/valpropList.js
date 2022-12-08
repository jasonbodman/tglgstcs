import styles from '../../styles/iconList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const valpropList = ({ icons }) => {
    return (
      <div className={styles.listWrapper}>
        <ul>
            <li>Dog</li>
            <li>Cat</li>
            <li>George</li>
        </ul>

      </div>
  )
  }
  
  export default valpropList 

