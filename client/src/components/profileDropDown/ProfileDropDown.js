import React from 'react';

const ProfileDropDown = (props) => {
  return (
    <div>
      <select name='profileDropDown' id='profileDropDown'>
        <option value="account">Account</option>
        <option value="logout">Logout</option>
      </select>
    </div>
  );
}

export default ProfileDropDown;