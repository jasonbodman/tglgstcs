import React from "react"
import Link from "next/link"

import Layout from '../components/layout'
import Hero from '../components/hero'
import SectionHeader from '../components/sectionHeader'
import ContactForm from '../components/contactForm'

import styles from '../styles/Home.module.css'
import globals from '../styles/globals.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import client from "../client"
import {siteSettingsQuery} from '../lib/siteSettings'

import {urlFor} from '../lib/imageBuilder'

export default function Home(props) {
  return (
    <>
    <Layout title={props.siteSettings.title} logo={props.siteSettings.logo} navigation={props.siteSettings.mainNavigation} phone={props.siteSettings.footerPhone} email={props.siteSettings.footerEmail} mail={props.siteSettings.footerMail} footerText={props.siteSettings.footerText}>
      <Hero />

      <div className={globals.bodyWrapper}>
        <div className={globals.contentWrapper}>
          <p className={styles.heroHeadline}><span className={globals.blueText}>Harness</span> the power of <span className={globals.blueText}>TOGO</span> and lead&nbsp;the&nbsp;pack</p>
        </div>

        <div className={styles.homeAboutSection}>
          <div className={styles.homeAboutContent} style={{ backgroundImage: `url(${urlFor(props.aboutImage).blur(7)})` }}>
            <div className={styles.homeAboutContentInner}>
              <div className={styles.homeAboutCol}>
                <h1 className={styles.homeAboutHeader}>
                  Who We Are
                </h1>
                <p className={styles.homeAboutDescription}>{props.WhatWeDo}</p>
              </div>

              <div className={styles.homeAboutCol}>
                <h1 className={styles.homeAboutHeader}>
                  What We Do
                </h1>
                <p className={styles.homeAboutDescription}>{props.WhoWeAre}</p>
              </div>

              <div className={styles.homeAboutFullWidth}>
                <h1 className={styles.homeAboutHeader}>
                  Who We Serve
                </h1>
                <p className={styles.homeAboutDescription}>{props.WhoWeServe}</p>
              </div>
            </div>
            
          </div>

        </div>


        <div className={styles.homeServiceSection}>
          <SectionHeader title={props.servicesTitle} />
          <div className={globals.contentWrapper}>
            <p className={globals.sectionIntro}>{props.servicesIntro}</p>
          </div>

          <div className={styles.homeServiceListWrapper}>
            <div className={styles.homeServiceList}>
              <div className={styles.homeServiceListItemFull} style={{ 
                backgroundImage: `url(${urlFor(props.servicesList.servicesListFull.image).blur(15).width(1300)})` }}>
                <div className={styles.homeServiceItemWrapper}>
                  <h1 className={styles.homeServiceItemTitle}>{props.servicesList.servicesListFull.title}</h1>
                  <div className={styles.homeServiceItemContent}>
                      <p className={styles.homeServiceItemDescription}>{props.servicesList.servicesListFull.description}</p>
                      <Link href={`/services/${props.servicesList.servicesListFull.slug.current}`} className={styles.homeServiceItemLink}>Learn More <FontAwesomeIcon className={styles.blueLinkArrow} icon={faArrowRight}/></Link>
                  </div>
                </div>
              </div>
              <div className={styles.homeServiceListItem} style={{ backgroundImage: `url(${urlFor(props.servicesList.servicesListThreeUpLeft.image).blur(15)})` }}>
                <div className={styles.homeServiceItemWrapper}>
                  <h1 className={styles.homeServiceItemTitle}>{props.servicesList.servicesListThreeUpLeft.title}</h1>
                  <div className={styles.homeServiceItemContent}>
                      <p className={styles.homeServiceItemDescription}>{props.servicesList.servicesListThreeUpLeft.description}</p>
                      <Link href={`/services/${props.servicesList.servicesListThreeUpLeft.slug.current}`} className={styles.homeServiceItemLink}>Learn More <FontAwesomeIcon className={styles.blueLinkArrow} icon={faArrowRight}/></Link>
                  </div>
                </div>
              </div>
              <div className={styles.homeServiceListItem} style={{ backgroundImage: `url(${urlFor(props.servicesList.servicesListThreeUpCenter.image).blur(15)})` }}>
                <div className={styles.homeServiceItemWrapper}>
                  <h1 className={styles.homeServiceItemTitle}>{props.servicesList.servicesListThreeUpCenter.title}</h1>
                  <div className={styles.homeServiceItemContent}>
                      <p className={styles.homeServiceItemDescription}>{props.servicesList.servicesListThreeUpCenter.description}</p>
                      <Link href={`/services/${props.servicesList.servicesListThreeUpCenter.slug.current}`} className={styles.homeServiceItemLink}>Learn More <FontAwesomeIcon className={styles.blueLinkArrow} icon={faArrowRight}/></Link>
                  </div>
                </div>
              </div>
              <div className={styles.homeServiceListItem} style={{ backgroundImage: `url(${urlFor(props.servicesList.servicesListThreeUpRight.image).blur(15)})` }}>
                <div className={styles.homeServiceItemWrapper}>
                  <h1 className={styles.homeServiceItemTitle}>{props.servicesList.servicesListThreeUpRight.title}</h1>
                  <div className={styles.homeServiceItemContent}>
                      <p className={styles.homeServiceItemDescription}>{props.servicesList.servicesListThreeUpRight.description}</p>
                      <Link href={`/services/${props.servicesList.servicesListThreeUpRight.slug.current}`} className={styles.homeServiceItemLink}>Learn More <FontAwesomeIcon className={styles.blueLinkArrow} icon={faArrowRight}/></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.homeServicesLinkWrapper}>
              <Link className={styles.homeServicesLink} href="/services">View All Services <FontAwesomeIcon className={styles.blueLinkArrow} icon={faArrowRight}/></Link>
            </div>    
          </div>      
        </div>
      
        {props.contactForm == true ? (<ContactForm intro={props.siteSettings.contactFormIntro}/>): (null)}
        

      </div>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const query = `
    *[_type == "homepage"] {
      "aboutImage": aboutBackgroundImage{
        ...,
        asset->{url}
      },
      aboutWhatWeDo,
      aboutWhoWeAre,
      aboutWhoWeServe,
      servicesTitle,
      servicesIntro,
      servicesList{
        servicesListFull->{
          title,
          description,
          image{
            ...,
            asset->{url}
          },
          slug
        },
        servicesListThreeUpCenter->{
          title,
          description,
          image{
            ...,
            asset->{url}
          },
          slug
        },
        servicesListThreeUpLeft->{
          title,
          description,
          image{
            ...,
            asset->{url}
          },
          slug
        },
        servicesListThreeUpRight->{
          title,
          description,
          image{
            ...,
            asset->{url}
          },
          slug
        },
      },
      contactForm,
    }[0]
    `

  const siteSettings = await client.fetch(siteSettingsQuery)
  const qresult = await client.fetch(query)

  const aboutImage = qresult.aboutImage
  const WhatWeDo = qresult.aboutWhatWeDo
  const WhoWeAre = qresult.aboutWhoWeAre
  const WhoWeServe = qresult.aboutWhoWeServe
  const servicesTitle = qresult.servicesTitle
  const servicesIntro = qresult.servicesIntro
  const servicesList = qresult.servicesList
  const contactForm = qresult.contactForm

  return {
    props: {
      siteSettings,
      aboutImage,
      WhatWeDo,
      WhoWeAre,
      WhoWeServe,
      servicesTitle,
      servicesIntro,
      servicesList,
      contactForm
    }
  }
}
