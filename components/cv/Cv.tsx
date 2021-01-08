import styles from '../../styles/Cv.module.css'
import CvHeader from './CvHeader'
import ExperienceEntry from './ExperienceEntry'
import SkillSection from './SkillSection'

export default function Cv(props) {
  const {
    frontmatter,
    companies,
    workExperience,
    skills,
    communities,
    awards,
    training
  } = props.data

  return(
    <div className={styles.cv}>
      <CvHeader frontmatter = {frontmatter} />

      <div className={styles.cvContent}>
        <h2>Work Experience</h2>
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
      </div>
    </div>
  )
}