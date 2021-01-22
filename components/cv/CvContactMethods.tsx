import styles from '../../styles/CvContactMethods.module.css'
import Icon from '../Icon'

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
      <Icon name={faIconId} className={styles.contactIcon}/>
      <a href={linkHref} target='_blank'>{display}</a>
    </div>
  )
}