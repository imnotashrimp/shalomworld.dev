import styles from '../../styles/CvEntry.module.css'

export default function SkillSection(props) {
  let {title, array} = props

  return (<>
    <h3>{title}</h3>

    {array.map((entry, index) => {
      let {name, items} = entry
      return (
        <div key={index}>
          <h4 className={styles.heading}>{name}</h4>
          <p className={styles.skillsPara}>{items.join(', ')}</p>
        </div>
      )
    })}
  </>)
}