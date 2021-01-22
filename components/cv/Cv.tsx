import styles from '../../styles/Cv.module.css'
import CvHeader from './CvHeader'
import ExperienceSection from './ExperienceSection'
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
      {/* Header */}
      <CvHeader frontmatter = {frontmatter} />

      {/* Main content */}
      <div className={styles.cvContent}>
        <ExperienceSection
          title="Work Experience"
          experienceList={workExperience}
          companies={companies}
        />
        <SkillSection title="Skills" array={skills} />
        <SkillSection title="Communities" array={communities} />
        <SkillSection title="Education and Training" array={training} />
        <SkillSection title="Awards" array={awards} />
      </div>

      {/* Footer */}
      
    </div>
  )
}