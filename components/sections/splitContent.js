import SectionHeader from "../sectionHeader"

import styles from '../../styles/sections.module.css'

const splitContent = (props) => {
    const {heading, contentSetup, leftTextContent, leftImageContent, rightTextContent, rightImageContent} = props
    console.log(contentSetup)
    return (
        <div className={styles.sectionWrapper}>

            {heading ? <SectionHeader title={heading} /> : null}

            <div className={styles.splitWrapper}>
                <div className={styles.leftWrapper}>
                    { contentSetup == 'TLTR' || contentSetup == 'TLIR' ? (

                        leftTextContent?.map((item, key) => (
                        <p key={key}>{item.children[0].text}</p>
                        ))      
                        
                    ) : (
                        // ADD IMAGE HERE (urlFor)
                        <p>LeftImageContent</p>
                    )} 
                </div>
                
                <div className={styles.rightWrapper}>
                    { contentSetup == 'ILIR' || contentSetup == 'TLIR' ? (
                        
                        // ADD IMAGE HERE (urlFor)
                        <p>RightImageContent</p>
                    ) : (
                        rightTextContent?.map((item, key) => (
                        <p key={key}>{item.children[0].text}</p>
                        )) 
                    )} 
                </div>
            </div>

        </div>

  )
  }
  
  export default splitContent