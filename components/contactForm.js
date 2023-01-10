import styles from '../styles/contactForm.module.css'
import globals from '../styles/globals.module.css'

import SectionHeader from './sectionHeader'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const contactForm = ({intro}) => {
    return (
      <div className={globals.sectionWrapper} id='contact'>
        <SectionHeader title={"Let's Chat"} />
        <div className={globals.contentWrapper}>
          { intro ? <p className={globals.sectionIntro}>{intro}</p> : <p className={globals.sectionIntro} />}
          
          <div className={styles.formWrapper}>
            <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/about" netlify>
              <div hidden>
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </div>
              <input type="hidden" name="form-name" value="contact" />
              
              <div className={styles.inputWrapper}>
                <label hidden>Name</label><input className={styles.formInput} type="text" name="name" placeholder="Name*" required/>
              </div>
              
              <div className={styles.inputWrapper}>
                <label hidden>Email Address</label><input className={styles.formInput} type="email" name="email" placeholder="Email Address*" required/>
              </div>

              <div className={styles.inputWrapper}>
                <label hidden>Phone Number</label><input className={styles.formInput} type="text" name="phone" placeholder="Phone Number*" required/>
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
  