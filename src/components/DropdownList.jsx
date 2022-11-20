import DropdownItem from './DropdownItem';
import { useState } from 'react';

const DropdownList = ({items}) => {

  const [currentItem, setCurrentItem] = useState('Profile information');

  return (
    <ul className="dropdown">
      {items.map((item, index) => {
        return <DropdownItem
          key={index.toString()}
          item={item}
          currentItem={currentItem} />
      })}
    </ul>
  )
}

export default DropdownList;