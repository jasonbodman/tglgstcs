import React from "react"
import Link from 'next/link'

import styles from '../styles/infoPage.module.css'
import globals from '../styles/globals.module.css'

import client from "../client"
import Layout from '../components/layout'
import {siteSettingsQuery} from '../lib/siteSettings'

export default function ThankYou(props) {
  return (
    <>
    <Layout title={props.siteSettings.title} logo={props.siteSettings.logo.asset.url} favicon={props.siteSettings.favicon.asset.url}navigation={props.siteSettings.mainNavigation} phone={props.siteSettings.footerPhone} email={props.siteSettings.footerEmail} mail={props.siteSettings.footerMail} footerText={props.siteSettings.footerText}>

      <div className={styles.infoIntroWrapper}>
      <div className={globals.contentWrapper}>

        <p className={styles.infoTitle}>Thank You</p>
        <p className={styles.infoIntro}>Thanks for reaching out to us. Someone will review your message and get back to you promptly. If you need more immediate assitance, please use our chat application at the bottom of the page or email us at contactus@harnesstogo.com</p>
        <div className={styles.buttonGroup}>
        <button className={styles.infoButton}>Home</button>
        <button className={styles.infoButton}>About</button>
        <button className={styles.infoButton}>Services</button>

        </div>
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


