import React from "react"
import ContactForm from '../components/contactForm'

import client from "../client"
import Layout from '../components/layout'
import {siteSettingsQuery} from '../lib/siteSettings'

export default function Home(props) {

  return (
    <>
    <Layout title={props.siteSettings.title} logo={props.siteSettings.logo.asset.url} favicon={props.siteSettings.favicon.asset.url}navigation={props.siteSettings.mainNavigation} phone={props.siteSettings.footerPhone} email={props.siteSettings.footerEmail} mail={props.siteSettings.footerMail} footerText={props.siteSettings.footerText}>
      <ContactForm />

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