import React from "react"
import Image from 'next/image'

import client from "../../client"

import PageHero from "../../components/pageHero"
import styles from '../../styles/Home.module.css'


export default function Services(props) {

  return (
    <>
      <div>
        <PageHero hero={props.pageHero} title={props.pageTitle} tagline={props.pageSubtitle} />
        <div className={styles.contentWrapper}>
          <p>{props.servicesIntro}</p>

          <div className={styles.serviceList}>
            
          </div>
        </div>
      </div>
    </>
  )
}


export async function getStaticProps() {
  const query = `*[_type == "services"][0]{
    pageTitle,
    "pageHero": pageHero{asset->{url}},
    pageSubtitle,
    servicesIntro,
    servicesPageList[]-> {
      title,
      "slug": slug.current,
      tagline,
    },
  
  }`

  const qresult = await client.fetch(query)

  const pageTitle = qresult.pageTitle
  const pageSubtitle = qresult.pageSubtitle
  const pageHero = qresult.pageHero.asset.url
  const servicesIntro = qresult.servicesIntro
  const servicesPageList = qresult.servicesPageList

  return {
    props: {
      pageTitle,
      pageSubtitle,
      pageHero,
      servicesIntro,
      servicesPageList
    }
  }
}