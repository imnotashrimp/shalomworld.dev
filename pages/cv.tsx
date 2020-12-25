import fs from 'fs'
import path from 'path'
const yaml = require('js-yaml')

export default function Cv({response}) {
  const cv = response.cv
  const frontmatter = cv.frontmatter,
        workExperience = cv.workExperience,
        skills = cv.skills,
        communities = cv.communities,
        awards = cv.awards,
        training = cv.training

  return(<>
    <h1>{frontmatter.name}</h1>
    <h2>{frontmatter.subhead}</h2>

    <h3>Work Experience</h3>
    {workExperience.map(workplace => {
      let {company, location, website, positions} = workplace
      return(<>
        <h4><a href={website}>{company}</a> ({location})</h4>
        {positions.map(position => {
          let {jobTitle, startDate, endDate, items} = position
          return (<>
            <h5>{jobTitle} ({startDate} – {endDate})</h5>
            <ul>
              {items ? items.map(item => <li>{item}</li>) : ''}
            </ul>
          </>)
        })}
      </>)
    })}

    <h3>Skills</h3>
    <p>{Object.keys(skills)}</p>
  </>)
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