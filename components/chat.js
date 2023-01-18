import { useRef } from 'react'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'

export default function Chat() {
    const tawkMessengerRef = useRef()
  
    const handleMinimize = () => {
      tawkMessengerRef.current.minimize()
    }
    
    return (
      <>  
        <button onClick={handleMinimize}> Minimize the Chat </button>
  
        <TawkMessengerReact
            propertyId="63c7598a47425128790e4088"
            widgetId="1gn1bbhel"
            ref={tawkMessengerRef}/>
      </>
    )
  }
  