import React from "react"
import Link from 'next/link'

import styles from '../styles/errorPage.module.css'
import globals from '../styles/globals.module.css'

import client from "../client"
import Layout from '../components/layout'
import {siteSettingsQuery} from '../lib/siteSettings'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

export default function ThankYou(props) {
  return (
    <>
    <Layout title={props.siteSettings.title} logo={props.siteSettings.logo.asset.url} favicon={props.siteSettings.favicon.asset.url}navigation={props.siteSettings.mainNavigation} phone={props.siteSettings.footerPhone} email={props.siteSettings.footerEmail} mail={props.siteSettings.footerMail} footerText={props.siteSettings.footerText}>

      <div className={styles.errorIntroWrapper}>
        <div className={globals.contentWrapper}>
          <FontAwesomeIcon icon={faCircleExclamation} style={{color: '#009BDF', fontSize: '2.5rem', textAlign: 'center', width: '100%', paddingBottom: '5px'}}/>
          <p className={styles.errorTitle}>Whoops...</p>
          <p className={styles.errorIntro}>Looks like you ended up at a destination that doesn't exist!
          
          <br />Head back <Link href="/">home</Link> or shoot us a message at <Link href="mailto:contactus@harnesstogo.com">contactus@harnesstogo.com</Link> if you keep running into this error!</p>

          <button className={styles.infoButton}>Home</button>

        </div>
      </div>


    </Layout>

    </>
  )
}

export async function getStaticProps() {


  const siteSettings = await client.fetch(siteSettingsQuery)


  return {
    props: {
      siteSettings,
    }
  }
}


