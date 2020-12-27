import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <script src="https://kit.fontawesome.com/c070445439.js" crossorigin="anonymous"></script>
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
