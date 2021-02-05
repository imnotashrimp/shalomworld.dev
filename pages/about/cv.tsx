import Head from 'next/head'
import CvLayout from '../../components/layouts/CvLayout'
import fs from 'fs'
import path from 'path'
const yaml = require('js-yaml')

export default function Cv({cv}) {

  return (<>
    <Head>
      <title key="title">Stefan (Shalom) Boroda</title>
    </Head>

    <CvLayout data={cv}/>
  </>)
}

export async function getStaticProps() {
  let cv: {[key: string]: any} = {}
  const cvFilepath = path.join(process.cwd(), 'data', 'cv.yaml')
  const cvYaml = fs.readFileSync(cvFilepath, 'utf-8')

  cv = yaml.safeLoad(cvYaml)

  return {
    props: {
      cv,
    }, // passed to the page component as props
  }
}