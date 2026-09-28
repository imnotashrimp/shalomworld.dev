import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <Script src="https://kit.fontawesome.com/c070445439.js" crossOrigin="anonymous" />
    <Component {...pageProps} />
  </>)
}

export default MyApp
