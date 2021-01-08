import styles from '../../styles/CvEntry.module.css'

export default function ExperienceEntry(props) {
  let {jobTitle, startDate, endDate, date, items} = props.position
  let dates = startDate && endDate ? `${startDate} – ${endDate}` : startDate || endDate || date

  items = items || []
  let {companyName, location, website} = props.company
  return (<>
    <h3 className={styles.heading}>
      <div className={styles.jobTitle}>{jobTitle}</div>
      <div className={styles.dates}>( {dates} )</div>
    </h3>

    <div className={styles.subheading}>
      <a href={website}>{companyName}</a>, {location}
    </div>

    <ul className={styles.bulletList}>
      {
        items.map((item, index) => {
          return <li key={index} dangerouslySetInnerHTML={{__html: item.content}}></li>
        })
      }
    </ul>
  </>)
}

