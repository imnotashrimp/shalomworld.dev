import styles from '../../styles/CvContactMethods.module.css'

export default function CvContactMethods(props) {
  let { contactInfo } = props
  console.log('Loading CvContactMethods: ', contactInfo)

  return (
    <div className={styles.contactInfo}>
      {contactInfo.map(contactMethod => {
        let { type, faIconId, linkHref, display } = contactMethod
        return (
          <ContactMethod
            key={type}
            faIconId={faIconId}
            linkHref={linkHref}
            display={display}
          />
        )
      })}
    </div>
  )
}

export function ContactMethod(props) {
  let { faIconId, linkHref, display } = props

  return (
    <div>
      <i className={`${faIconId} ${styles.contactIcon}`}></i>
      <a href={linkHref} target='_blank'>{display}</a>
    </div>
  )
}