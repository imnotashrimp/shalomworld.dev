import styles from '../../styles/CvFooter.module.css'
import headerStyles from '../../styles/CvHeader.module.css'
import Icon from '../Icon'

export default function CvFooter(props) {

  return (
    <div className={`${styles.footerContainer} ${headerStyles.footerContainer}`}>
      <div>
        Coded with <Icon name='heart' /> in {` `}
        <a href="https://reactjs.org/" target="_blank"><Icon name='react' /> React</a>
        {` `} and {` `}
        <a href="https://nextjs.org/" target="_blank">Next.js</a>.
        <br />
        Stored in {` `}
        <a href="https://github.com/imnotashrimp/shalomworld" target="_blank"><Icon name='github' /> GitHub</a>,
        served by {` `}
        <a href="https://www.netlify.com/" target="_blank"><img src='/netlify-logo-light.svg' alt="Netlify" className={styles.inlineLogo}/> Netlify</a>.
      </div>
    </div>
  )
}