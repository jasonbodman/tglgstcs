import Head from "next/head"

import styles from '../styles/layout.module.css'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div className={styles.fullWidth}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Togo Logistics</title>
        <link rel='icon' href='favicon.ico' />
      </Head>
      
      <Navbar />

      <div className={styles.fullHeight} />

      <main className="contentWrapper">
       {children}
      </main>
      <Footer /> 
    </div>
)
}

export default Layout 
