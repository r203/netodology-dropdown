const DropdownItem = ({item, currentItem}) => {

  return (
    <li className={item === currentItem ? 'active' : ''}>
      <a href="/">{item} </a>
    </li>
  )
}

export default DropdownItem;