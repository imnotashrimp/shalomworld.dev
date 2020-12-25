import fs from 'fs'
import path from 'path'
const yaml = require('js-yaml')

export default function Cv({response}) {
  console.log(response)
  return (<>
    <p>cv: {response.cvFilepath}</p>
  </>)
}

export async function getStaticProps() {
  let response: {[key: string]: any} = {}
  const cvFilepath = path.join(process.cwd(), 'data', 'cv.yaml')
  const cvYaml = fs.readFileSync(cvFilepath, 'utf-8')
  const cv = yaml.safeLoad(cvYaml)

  response.cv = cv
  console.log(response)

  return {
    props: {
      response,
    }, // passed to the page component as props
  }
}