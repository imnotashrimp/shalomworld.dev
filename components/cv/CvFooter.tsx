import styles from '../../styles/CvFooter.module.css'
import headerStyles from '../../styles/CvHeader.module.css'
import CvContactMethods from '../../components/cv/CvContactMethods'

export default function CvFooter(props) {
  const {contactInfo} = props

  return (
    <div className={`${styles.footerContainer} ${headerStyles.footerContainer}`}>
      {/* <CvContactMethods contactInfo={contactInfo} /> */}
      {`Coded with <3 in React with Next.js`}
    </div>
  )
}