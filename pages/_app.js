//  import global  css
import "../styles/globals.css";

// import chat widget
import Chat from '../components/chat'

// import fontAwesome 
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// import layout  components form components folder
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <Chat />
    </>
  )
}
