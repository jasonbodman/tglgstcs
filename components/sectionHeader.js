import styles from '../styles/sectionHeader.module.css'

const sectionHeader = ({ title }) => {
    return (
        <div className={styles.sectionHeader}>
            <h1>{title}</h1>
        </div>
      
  )
  }
  
  export default sectionHeader 
  