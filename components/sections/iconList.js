import Link from 'next/link'
import styles from '../../styles/sections.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const iconList = (props) => {

    const {list} = props
    return (


        <div className={styles.sectionWrapper}>
            <div className={styles.listWrapper}>
                {list.map((item, key) => (
                <div className={styles.iconListItem} key={key}>
                    <div className={styles.itemIconContainer}>
                        <svg className={styles.itemIcon} dangerouslySetInnerHTML={{__html: item.icon}} fill={'#009BDF'}/>
                    </div>
                    <div className={styles.itemName}>
                        <Link href={`/services/`}>
                            <p>{item.item}</p>
                        </Link>
                    </div>
                </div>
                ))}        

                

            </div>
        </div>
            

    )
  }
  
  export default iconList