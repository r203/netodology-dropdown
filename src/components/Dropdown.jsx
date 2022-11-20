import { useState } from "react";
import DropdownList from './DropdownList';

const Dropdown = () => {

  const [isShow, setIsShow] = useState(false);
  const items = ['Profile information', 'Change Password', 'Become PRO', 'Help', 'Log out'];

  let onToggle = () => {
    setIsShow(!isShow);
  }

  return (
    <div>
      <button 
        className="btn"
        onClick={() => onToggle()}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      {isShow && <DropdownList items={items}/>}
    </div>
  )
}

export default Dropdown;