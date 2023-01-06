import styles from '../../styles/sections.module.css'

const iconList = (props) => {

    const {list} = props
    return (


        <div className={styles.sectionWrapper}>
            <div className={styles.listWrapper}>
                {list.map((item, key) => (
                <div className={styles.iconListItem} key={key}>
                    <div className={styles.itemIconContainer}>
                        <span className={styles.itemIcon} dangerouslySetInnerHTML={{__html: item.icon}} fill={'#009BDF'}/>
                    </div>
                    <div className={styles.itemName}>
                        <p>{item.item}</p>
                    </div>
                </div>
                ))}        

                

            </div>
        </div>
            

    )
  }
  
  export default iconList