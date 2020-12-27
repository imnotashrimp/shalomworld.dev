import styles from '../../styles/CvHeader.module.css'

export default function CvHeader(props) {
  const {name, subhead, contactInfo} = props.frontmatter
  const { phone, email, github, linkedin } = contactInfo

  return (
    <div className={styles.headerContainer}>

      <div className={styles.cvTitles}>
        <h1>{name}</h1>
        <div className={styles.subhead}>{subhead}</div>
      </div>

      <ul className={styles.contactInfo}>
        <li>
          <i className="fas fa-phone"></i>
          <a href={`tel:${phone}`}>{phone}</a>
        </li>

        <li>
          <i className="far fa-envelope"></i>
          <a href={`mailto:${email}`}>{email}</a>
        </li>

        <li>
          <i className="fab fa-github"></i>
          <a href={`https://github.com/${github}`}>{github}</a>
        </li>

        <li>
          <i className="fab fa-linkedin"></i>
          <a href={`https://www.linkedin.com/in/${linkedin}`}>linkedin.com/in/{linkedin}</a>
        </li>

      </ul>
    </div>
  )
}