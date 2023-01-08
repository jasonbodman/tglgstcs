import React from "react"
import Link from "next/link"

import client from "../../client"
import {siteSettingsQuery} from '../../lib/siteSettings'
import {urlFor} from '../../lib/imageBuilder'

import Layout from '../../components/layout'
import PageHero from "../../components/pageHero"
import ContactForm from "../../components/contactForm"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from '../../styles/servicesPage.module.css'
import globals from '../../styles/globals.module.css'


export default function Services(props) {
  const serviceList = props.servicesPageList
  return (
    <>
    <Layout title={props.siteSettings.title} logo={props.siteSettings.logo.asset.url} favicon={props.siteSettings.favicon.asset.url}navigation={props.siteSettings.mainNavigation} phone={props.siteSettings.footerPhone} email={props.siteSettings.footerEmail} mail={props.siteSettings.footerMail} footerText={props.siteSettings.footerText}>
        <PageHero hero={props.pageHero} title={props.pageTitle} tagline={props.pageSubtitle} />
        
        <div className={globals.contentWrapper}>
          <p className={globals.sectionIntro}>{props.servicesIntro}</p>

          <div className={styles.servicesList}>
            
            {serviceList.map((item, key) => (
              <div className={styles.servicesItem} style={{ 
                backgroundImage: `url(${urlFor(item.image).blur(15)})` }} key={key}>
                
                <div className={styles.servicesItemInner} >
                  <p className={styles.servicesItemTitle}>{item.title}</p>
                  <p className={styles.servicesItemDescription}>{item.description}</p>
                  <Link href={`/services/${item.slug}`} className={styles.servicesItemLink}>Learn More <FontAwesomeIcon className={styles.blueLinkArrow} icon={faArrowRight}/></Link>
                </div>
              </div>
            ))}
            
          </div>
          
        </div>

        {props.contactForm == true ? (<ContactForm />): (null)}

      </Layout>
    </>
  )
}


export async function getStaticProps() {
  const query = `*[_type == "servicesPage"][0]{
    pageTitle,
    pageHero{
      ...,
      asset->{url}
    },
    pageSubtitle,
    servicesIntro,
    servicesPageList[]-> {
      title,
      "slug": slug.current,
      description,
      image{
        ...,
        asset->{url}
      }
    },
    contactForm
  
  }`

  const siteSettings = await client.fetch(siteSettingsQuery)

  const qresult = await client.fetch(query)
  const pageTitle = qresult.pageTitle
  const pageSubtitle = qresult.pageSubtitle
  const pageHero = qresult.pageHero
  const servicesIntro = qresult.servicesIntro
  const servicesPageList = qresult.servicesPageList
  const contactForm = qresult.contactForm

  return {
    props: {
      siteSettings,
      pageTitle,
      pageSubtitle,
      pageHero,
      servicesIntro,
      servicesPageList,
      contactForm
    }
  }
}