import Document, { Html, Head, Main, NextScript } from 'next/document'

let googleTagManagerSrc,
    gaEmbeddedScript

if (process.env.NODE_ENV === 'production') {
  googleTagManagerSrc = 'https://www.googletagmanager.com/gtag/js?id=G-E77ZNRKHH1'
  gaEmbeddedScript = `
    window.dataLayer = window.dataLayer || []
    function gtag() {dataLayer.push(arguments)}
    gtag('js', new Date());
    gtag('config', 'G-E77ZNRKHH1')
  `
}

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <script async src={googleTagManagerSrc} />
          <script dangerouslySetInnerHTML={{__html: gaEmbeddedScript}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
