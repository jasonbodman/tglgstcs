import Link from "next/link"

import SectionHeader from "../sectionHeader"
import styles from '../../styles/sections.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ctaSection = (props) => {
    const {ctaIntro, ctaURL, ctaText} = props

    return (
        <div className={styles.sectionWrapper}>

            {ctaIntro ? <p className={styles.ctaIntro}>{ctaIntro}</p> : null}

            <Link href={ctaURL}>
                <div className={styles.ctaButtonWrapper}>
                    <button className={styles.ctaButton} type="submit">{ctaText} <FontAwesomeIcon className={styles.whiteLinkArrow} icon={faArrowRight}/></button>
                </div>
            </Link>
        </div>

    )
}
  
export default ctaSection