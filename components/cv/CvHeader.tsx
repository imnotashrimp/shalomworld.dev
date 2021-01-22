import styles from '../../styles/CvHeader.module.css'
import CvContactMethods from '../../components/cv/CvContactMethods'

export default function CvHeader(props) {
  const {contactInfo, frontmatter} = props
  const {name, subhead} = frontmatter

  return (
    <div className={styles.headerContainer}>

      <div className={styles.cvTitles}>
        <h1>{name}</h1>
        <div className={styles.subhead}>{subhead}</div>
      </div>

      <CvContactMethods contactInfo={contactInfo} />
    </div>
  )
}
