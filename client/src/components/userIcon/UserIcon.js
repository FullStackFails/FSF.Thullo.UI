import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserIcon.module.css';

const UserIcon = (props) => {
  let iconContent = <p>{`${props.firstName[0].toUpperCase()}${props.lastName[0].toUpperCase()}`}</p>;

  if (props.profilePicture !== null && props.profilePicture !== undefined) {
    iconContent = <img src={props.profilePicture} alt="Profile" />;
  }

  return (
    <div className={styles.userIconContainer}>
      {iconContent}
    </div>
  )
};

UserIcon.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  profilePicture: PropTypes.string,
};

UserIcon.defaultProps = {
  firstName: '',
  lastName: '',
  profilePicture: undefined,
};

export default UserIcon;