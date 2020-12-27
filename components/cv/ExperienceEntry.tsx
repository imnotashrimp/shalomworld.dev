export default function ExperienceEntry(props) {
  let {jobTitle, startDate, endDate, date, items} = props.position
  items = items || []
  let {companyName, location, website} = props.company
  return (<>
    <h4>{jobTitle} (<a href={website}>{companyName}</a> / {location}, {startDate && endDate ? `${startDate} – ${endDate}` : startDate || endDate || date})</h4>

    <ul>
      {items.map((item, index) => <li>{item}</li>)}
    </ul>
  </>)
}

