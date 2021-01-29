export default function GoogleAnalytics() {
  if (process.env.NODE_ENV !== 'production') return null;

  const googleTagId         = 'G-E77ZNRKHH1'
  const googleTagManagerSrc = `https://www.googletagmanager.com/gtag/js?id=${googleTagId}`
  const gaEmbeddedScript    = `
    window.dataLayer = window.dataLayer || []
    function gtag() {dataLayer.push(arguments)}
    gtag('js', new Date());
    gtag('config', '${googleTagId}');
  `

  return (<>
    <script async src={googleTagManagerSrc} />
    <script dangerouslySetInnerHTML={{__html: gaEmbeddedScript}} />
  </>)
}