import styles from '../styles/contactForm.module.css'
import globals from '../styles/globals.module.css'

import SectionHeader from './sectionHeader'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const contactForm = () => {
    return (
      <div className={globals.sectionWrapper}>
        <SectionHeader title={"Let's Chat"} />
        <div className={globals.contentWrapper}>
          <p className={globals.sectionIntro}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className={styles.formWrapper}>
            <form>
              <div className={styles.inputWrapper}>
                <label hidden>Name</label><input className={styles.formInput} type="text" name="name" placeholder="Name*"/>
              </div>
              
              <div className={styles.inputWrapper}>
                <label hidden>Email Address</label><input className={styles.formInput} type="text" name="email" placeholder="Email Address*"/>
              </div>

              <div className={styles.inputWrapper}>
                <label hidden>Phone Number</label><input className={styles.formInput} type="text" name="phone" placeholder="Phone Number*"/>
              </div>

              <div className={styles.inputWrapper}>
                <label hidden>Your Message</label><textarea className={styles.formTextArea} rows="2" name="message" placeholder="Your Message" ></textarea>
              </div>

              <div className={styles.buttonRight}>
                <div className={styles.inputWrapper}>
                  <button className={styles.blueButton} type="submit">Submit <FontAwesomeIcon className={styles.whiteLinkArrow} icon={faArrowRight}/></button>
                </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
  )
  }
  
  export default contactForm 
  