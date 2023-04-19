import { useRef } from 'react'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'

export default function Chat() {
    const tawkMessengerRef = useRef()
  
    const onLoad = () => {

      tawkMessengerRef.current.minimize()
    }
    
    const propertyID = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID
    const widgetID = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID

    return (
      <>    
        <TawkMessengerReact
            onLoad = {onLoad}
            propertyId = {propertyID}
            widgetId = {widgetID}
            ref={tawkMessengerRef}/>
      </>
    )
  }
  

  