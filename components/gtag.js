import Script from 'next/script'

const GTag = () => {
    const gTagId = process.env.NEXT_PUBLIC_GTAG_ID
    return (
        <div className="container">
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gTagId}`}/>
            <Script
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', ${gTagId}, {
                    page_path: window.location.pathname,
                    cookie_flags: 'SameSite=None; Secure',

                });
                `,
                }}
            />
        </div>
  )
  }
  
  export default GTag 