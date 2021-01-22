import styles from '../../styles/Cv.module.css'
import CvHeader from './CvHeader'
import CvFooter from './CvFooter'
import ExperienceSection from './ExperienceSection'
import SkillSection from './SkillSection'

export default function Cv(props) {
  const {
    frontmatter,
    contactInfo,
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
      <CvHeader
        frontmatter={frontmatter}
        contactInfo={contactInfo}
      />

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
      <CvFooter />
    </div>
  )
}