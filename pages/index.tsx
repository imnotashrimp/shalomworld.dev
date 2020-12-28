import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import styles from '../styles/Cv.module.css'
import CvHeader from '../components/cv/CvHeader'
import ExperienceEntry from '../components/cv/ExperienceEntry'
import SkillSection from '../components/cv/SkillSection'
const yaml = require('js-yaml')

export default function Cv({response}) {
  const {
    frontmatter,
    companies,
    workExperience,
    skills,
    communities,
    awards,
    training
  } = response.cv

  return(<div className={styles.cv}>
    <Head>
      <title key="title">Stefan (Shalom) Boroda</title>
    </Head>

    <CvHeader frontmatter = {frontmatter} />

    <h3>Work Experience</h3>
    {workExperience.map((position, index) => {
      return <ExperienceEntry
        key={index}
        company={companies[position.companyId]}
        position={position}
      />
    })}

    <SkillSection title="Skills" array={skills} />
    <SkillSection title="Communities" array={communities} />
    <SkillSection title="Awards" array={awards} />
    <SkillSection title="Education and Training" array={training} />
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