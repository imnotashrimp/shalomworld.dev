import styles from '../../styles/CvEntry.module.css'

export default function SkillSection(props) {
  let {title, array} = props

  return (<>
    <h2>{title}</h2>

    {array.map((entry, index) => {
      let {name, items} = entry
      items = Array.isArray(items) ? items.join(', ') : items
      return (
        <div key={index}>
          <h4 className={styles.heading}>{name}</h4>
          <p className={styles.skillsPara} dangerouslySetInnerHTML={{__html: items}}></p>
        </div>
      )
    })}
  </>)
}