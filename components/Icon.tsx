export default function Icon(props) {
  let {name, className} = props
  let provider = props.provider || 'fa'

  let iconClassName = iconKeys[provider][name]

  return <i className={`${iconClassName} ${className}`}></i>
}

const iconKeys = {
  fa: { // fontawesome
    envelope: 'far fa-envelope',
    github: 'fab fa-github',
    heart: 'fas fa-heart',
    linkedin: 'fab fa-linkedin',
    phone: 'fas fa-phone',
    react: 'fab fa-react'
  }
}