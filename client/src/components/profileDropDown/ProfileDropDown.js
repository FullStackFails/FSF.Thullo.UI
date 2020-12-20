import React, {useState} from 'react';
import Select from 'react-select';
import {logout} from '../../authorization/authService';

const ProfileDropDown = (props) => {
  const options = [
    { value: "account", label: "Account"},
    { value: "logout", label: "Logout"},
  ]
  
  const [selected, setSelected] = useState(options[0])
  
  const handleChange = (selectedOption) => {
    console.log(selectedOption)
    setSelected(selectedOption);
    if (selectedOption.value === "logout")
      logout();
  }

  return (
    <div>
      <Select
        name='profileDropDown'
        id='profileDropDown'
        value={selected}
        options={options}
        onChange={(selected) => handleChange(selected)}
      />
    </div>
  );
}

export default ProfileDropDown;