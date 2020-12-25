import fs from 'fs'
import path from 'path'

export default function Cv({response}) {
  return (<>
    <p>cv: {response.cv}</p>
  </>)
}

export async function getStaticProps() {
  const cvFilepath = path.join(process.cwd(), 'data', 'cv.yaml')
  const cv = fs.readFileSync(cvFilepath, 'utf-8')
  let response: {[key: string]: any} = {}

  response.cvFilepath = cvFilepath
  response.cv = cv
  console.log(response)

  return {
    props: {
      response,
    }, // passed to the page component as props
  }
}