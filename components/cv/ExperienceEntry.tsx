import styles from '../../styles/CvEntry.module.css'

export default function ExperienceEntry(props) {
  let {jobTitle, startDate, endDate, date, items} = props.position
  let dates = startDate && endDate ? `${startDate} – ${endDate}` : startDate || endDate || date

  items = items || []
  let {companyName, location, website} = props.company
  return (<>
    <h4 className={styles.heading}>
      <div className={styles.jobTitle}>{jobTitle}</div>
      <div className={styles.dates}>( {dates} )</div>
    </h4>

    <div className={styles.subheading}>
      <a href={website}>{companyName}</a>, {location}
    </div>

    <ul className={styles.bulletList}>
      {items.map((item, index) => <li key={index} dangerouslySetInnerHTML={{__html: item}}></li>)}
    </ul>
  </>)
}

