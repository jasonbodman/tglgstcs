import React from "react"
import Hero from '../components/hero'
import SectionHeader from '../components/sectionHeader'
import IconList from '../components/sections/iconList'
import ContactForm from '../components/contactForm'

import client from "../client"

import styles from '../styles/Home.module.css'


export default function Home(props) {

  return (
    <><div>
      <Hero />

      <div className={styles.bodyWrapper}>
        <div className={styles.missionStatement}>
          <p>{props.siteIntro}</p>
        </div>


        <div className={styles.sectionWrapper}>
          <SectionHeader title={props.serviceTitle} />
          <div className={styles.contentWrapper}>
            <p className={styles.sectionIntro}>{props.serviceIntro}</p>
            <IconList icons={props.services}/>
          </div>
        </div>
      
        <ContactForm />

      </div>
    </div>

    </>
  )
}

export async function getStaticProps() {
  const query = `
    *[_type == "homepage"] {
      ...,
      "icon": icon{
        ...,
        "asset": asset->,
      }
    }[0]
    `
  
  const iconQuery = `
    *[_type == "services" ][0]{
      servicesPageList[]->{
        _id,
        title,
        "slug": slug.current,
      },
      
    }
  `

  const qresult = await client.fetch(query)
  const iconresult = await client.fetch(iconQuery)

  const serviceTitle = qresult.servicesHeader

  const siteIntro = qresult.siteIntro

  const serviceIntro = qresult.servicesIntro

  const contactFormSwitch = qresult.contactForm

  const services = iconresult.servicesPageList

  return {
    props: {
      serviceTitle,
      siteIntro,
      serviceIntro,
      contactFormSwitch,
      services
    }
  }
}
