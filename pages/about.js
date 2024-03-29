import React from "react"
import Image from "next/image"
import Link from 'next/link'
import {PortableText} from '@portabletext/react'

import {phoneNumberBuilder} from '../lib/phoneNumber'
import SectionHeader from '../components/sectionHeader'
import ContactForm from '../components/contactForm'

import styles from '../styles/aboutPage.module.css'
import globals from '../styles/globals.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";

import client from "../client"
import Layout from '../components/layout'
import {siteSettingsQuery} from '../lib/siteSettings'

import {urlFor} from '../lib/imageBuilder'


const components = {
  block: {
      heading: ({children}) => (
          <h1 className={styles.historyHeader}>{children}</h1>
          ),            
      normal: ({children}) => <p className={styles.historyTextContent}>{children}</p>
  },
  list: {
      bullet: ({children}) => (
          <div>
              <ul className={styles.historyContentList}>
              {children.map((item, key) => (
              <div className={styles.historyListItem} key={key}>
                  <div className={styles.historyItemBullet}>
              <FontAwesomeIcon icon={faSquareCaretRight} style={{color: '#009BDF'}}/>
              </div>

              <div className={styles.historyItemContent}>
              {item}
              </div>

              </div>
              ))}
              </ul>
          </div>
          
      ),
  }
}

export default function About(props) {
  const bioList = props.bioList
  return (
    <>
    <Layout title={props.siteSettings.title} logo={props.siteSettings.logo.asset.url} favicon={props.siteSettings.favicon.asset.url}navigation={props.siteSettings.mainNavigation} phone={props.siteSettings.footerPhone} email={props.siteSettings.footerEmail} mail={props.siteSettings.footerMail} footerText={props.siteSettings.footerText}>

    <div className={styles.aboutHero}>
      <img className={styles.aboutHeroImage} src={urlFor(props.pageHero).size(1500,550).url()}/>
    </div>

    <div className={globals.contentWrapper}>
      <div className={styles.aboutIntroWrapper}>
        <p className={styles.aboutTitle}>{props.pageTitle}</p>
        <p className={styles.aboutIntro}>{props.aboutIntro}</p>
      </div>
    </div>

    <div className={styles.teamWrapper}>
      <SectionHeader title="Our Team" />

      <div className={styles.teamContent}>
        <div className={styles.bioList}>
          {bioList.map((item, key) => (
            <div className={styles.bioItem} key={key}>
              <div className={styles.bioPhoto}>
                <img src={urlFor(item.personPhoto).size(300,400).url()} alt={props.personName}/>
              </div>

              <div className={styles.bioContent}>
                <p className={styles.personName}>{item.personName}</p>
                <p className={styles.personTitle}>{item.personTitle}</p>
                <p className={styles.personBio}>{item.personBio}</p>
                <div className={styles.personContact}>
                  <Link href={`tel:${item.personPhone}`}><p className={styles.bioPhone}><FontAwesomeIcon icon={faPhone} className={styles.blueIcon}/>&nbsp;&nbsp;{phoneNumberBuilder(item.personPhone)}</p></Link>
                  
                  <Link href={`mailto:${item.personEmail}`}><p className={styles.bioEmail}><FontAwesomeIcon icon={faEnvelope} className={styles.blueIcon}/>&nbsp;&nbsp;{item.personEmail}</p></Link>
                </div>
              </div>
            </div>
          ))}        
        </div>
      </div>
    </div>

    <div className={styles.historyWrapper}>
      <SectionHeader title="The Togo Story" />
      <div className={styles.historyContent}>
        <img className={styles.historyPhoto} src={urlFor(props.historyPhoto).size(600,370).url()} alt={props.historyPhoto} />

        <div className={styles.historyText}>

          <PortableText value={props.historyContent} components={components} />
          {/* {props.historyContent.map((item, key) => (
            <p key={key} className={styles.historyParagraph}>{item.children[0].text}</p>
          ))}         */}
        </div>          
      </div>
    </div>

    {props.contactForm == true ? (<ContactForm intro={props.siteSettings.contactFormIntro}/>): (null)}

    </Layout>

    </>
  )
}

export async function getStaticProps() {
  const query = `
    *[_type == "aboutPage"] {
      pageTitle,
      pageHero{
        ...,
        asset->{url}
      },
      aboutIntro,
      bioList[]->{
        personName,
        personTitle,
        personBio,
        personPhoto{
          ...,
          asset->{url}
        },
        personEmail,
        personPhone
      },
      historyContent,
      historyPhoto{
        ...,
        asset->{url}
      },
      contactForm
    }[0]
  `

  const siteSettings = await client.fetch(siteSettingsQuery)

  const qresult = await client.fetch(query)
  const pageTitle = qresult.pageTitle
  const pageHero = qresult.pageHero
  const aboutIntro = qresult.aboutIntro
  const bioList = qresult.bioList
  const historyContent = qresult.historyContent
  const historyPhoto = qresult.historyPhoto
  const contactForm = qresult.contactForm

  return {
    props: {
      siteSettings,
      pageTitle,
      pageHero,
      aboutIntro,
      bioList,
      historyContent,
      historyPhoto,
      contactForm
    }
  }
}


