import Head from "next/head"

import styles from '../styles/globals.module.css'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ title, logo, favicon, navigation, footerText, phone, email, mail, children }) {

  return (
    <>
      <div className={styles.fullWidth}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{title}</title>
          <link rel='icon' href={favicon} key="favicon"/>
        </Head>
        
        <Navbar logo={logo} navigation={navigation} />

        <main className="contentWrapper">
        {children}
        </main>
        <Footer logo={logo} footerText={footerText} phone={phone} email={email} mail={mail}/> 
      </div>
    </>
  )
}