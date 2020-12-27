import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import styles from '../styles/Cv.module.css'
import CvHeader from '../components/cv/CvHeader'
const yaml = require('js-yaml')

export default function Cv({response}) {
  const cv             = response.cv
  const frontmatter    = cv.frontmatter
  const workExperience = cv.workExperience
  const skills         = cv.skills
  const communities    = cv.communities
  const awards         = cv.awards
  const training       = cv.training

  return(<div className={styles.cv}>
    <Head>
      <title key="title">Stefan (Shalom) Boroda</title>
    </Head>
    <CvHeader
      frontmatter = {frontmatter}
    />

    <h3>Work Experience</h3>
    {workExperience.map((workplace, index) => {
      let {company, location, website, positions} = workplace
      return(<div key={`${index}`}>
        <h4><a href={website}>{company}</a> ({location})</h4>
        {positions.map((position, index) => {
          let {jobTitle, startDate, endDate, items} = position
          return (<div key={index}>
            <h5>{jobTitle} ({startDate} – {endDate})</h5>
            <ul>
              {items ? items.map((item, index) => <li key={index}>{item}</li>) : ''}
            </ul>
          </div>)
        })}
      </div>)
    })}

    <h3>Skills</h3>
    <p>{Object.keys(skills)}</p>
  </div>)
}

export async function getStaticProps() {
  let response: {[key: string]: any} = {}
  const cvFilepath = path.join(process.cwd(), 'data', 'cv.yaml')
  const cvYaml = fs.readFileSync(cvFilepath, 'utf-8')
  const cv = yaml.safeLoad(cvYaml)

  response.cv = cv

  return {
    props: {
      response,
    }, // passed to the page component as props
  }
}