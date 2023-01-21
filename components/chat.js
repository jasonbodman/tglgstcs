import { useRef } from 'react'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'

export default function Chat() {
    const tawkMessengerRef = useRef()
  
    const handleMinimize = () => {
      tawkMessengerRef.current.minimize()
    }
    
    const propertyID = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID
    const widgetID = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID

    return (
      <>  
        <button onClick={handleMinimize}> Minimize the Chat </button>
  
        <TawkMessengerReact
            propertyId = {propertyID}
            widgetId = {widgetID}
            ref={tawkMessengerRef}/>
      </>
    )
  }
  