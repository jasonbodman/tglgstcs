import styles from '../../styles/sections.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight } from '@fortawesome/free-regular-svg-icons'

const faqList = (props) => {

    const {faqList} = props
    return (


        <div className={styles.sectionWrapper}>
            <div className={styles.listWrapper}>
                {faqList.map((item, key) => (
                    <div className={styles.faqItem} key={key}>

                        <div className={styles.faqIcon}>
                            <FontAwesomeIcon icon={faSquareCaretRight} style={{color: '#009BDF'}}/>
                        </div>

                        <div className={styles.faqContent}>
                            <div className={styles.faqQuestion}>                    
                                <p>{item.question}</p>
                            </div>

                            <div className={styles.faqAnswer}>
                                <p>{item.answer}</p>
                            </div>
                        </div>

                    </div>
                    
                ))}        

                

            </div>
        </div>
            

    )
  }
  
  export default faqList