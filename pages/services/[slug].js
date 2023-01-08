import React from "react"

import client from "../../client"
import Layout from '../../components/layout'
import {siteSettingsQuery} from '../../lib/siteSettings'

import PageHero from '../../components/pageHero'
import styles from '../../styles/service.module.css'
import RenderSections from "../../components/renderSections"
import ContactForm from "../../components/contactForm"



export async function getStaticPaths() {
  const paths = await client.fetch(`*[_type == "service" && defined(slug.current)][].slug.current`)

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const servicePage = await client.fetch(`
  *[_type == "service" && slug.current == $slug][0]{
    description,
    tagline,
    title,
    image{
      ...,
      asset->{url}
    },
    content[] {
      ...,
    },
    contactForm
  }
  `, { slug })

  if (!servicePage) {
    return {
      notFound: true,
    }
  }

  const siteSettings = await client.fetch(siteSettingsQuery)

  return {
    props: {
      siteSettings,
      servicePage
    }
  }
}

const Service = (props) => {
  
  return (
    <Layout title={props.siteSettings.title} logo={props.siteSettings.logo.asset.url} favicon={props.siteSettings.favicon.asset.url}navigation={props.siteSettings.mainNavigation} phone={props.siteSettings.footerPhone} email={props.siteSettings.footerEmail} mail={props.siteSettings.footerMail} footerText={props.siteSettings.footerText}>
      
      <PageHero hero={props.servicePage.image} title={props.servicePage.title} tagline={props.servicePage.tagline} />

      {props.servicePage.description ? 
        <div className={styles.overviewWrapper}>
          <p className={styles.pageOverview}>{props.servicePage.description}</p>
        </div>
      : null }
      
      <RenderSections sections={props.servicePage.content}/>

      {props.servicePage.contactForm == true ? (<ContactForm intro={props.siteSettings.contactFormIntro}/>): (null)}

    </Layout>

  )
}



export default Service