import Head from 'next/head'
import Cv from '../components/cv/Cv'
import fs from 'fs'
import path from 'path'
const yaml = require('js-yaml')

export default function Home({cvData}) {
  return (<>
    <Head>
      <title key="title">Stefan (Shalom) Boroda</title>
    </Head>

    <Cv data={cvData.cv}/>
  </>)
}

export async function getStaticProps() {
  let cvData: {[key: string]: any} = {}
  const cvFilepath = path.join(process.cwd(), 'data', 'cv.yaml')
  const cvYaml = fs.readFileSync(cvFilepath, 'utf-8')
  const cv = yaml.safeLoad(cvYaml)

  cvData.cv = cv

  return {
    props: {
      cvData,
    }, // passed to the page component as props
  }
}