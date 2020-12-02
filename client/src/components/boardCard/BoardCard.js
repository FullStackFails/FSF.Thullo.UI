import React from 'react';
import PropTypes from 'prop-types';
import styles from './BoardCard.module.css';
import UserIcon from '../userIcon/UserIcon';

const BoardCard = (props) => {
  const renderUsers = () => {
    const userListRendering = [];
    let userCount = 0;

    for (let i = 0; i < 3 && i < props.users.length; i++) {
      userListRendering.push(<li key={props.users[i].id}><UserIcon {...props.users[i]} /></li>);
      userCount += 1;
    }

    if (userCount < (props.users.length)) {
      const extraUserCount = props.users.length - userCount;
      userListRendering.push(<li key={props.users.length}>+ {extraUserCount} others</li>);
    }

    return userListRendering;
  };

  return (
    <div className={styles.boardCardContainer}>
      <img
        src={props.coverPhoto}
        alt={`${props.title} Cover`}
        className={styles.boardImage}
      />
      <p className={styles.boardTitleText}>{props.title}</p>
      <ul className={styles.boardUsersContainer}>
        {renderUsers()}
      </ul>
    </div>
  )
};

BoardCard.propTypes = {
  coverPhoto: PropTypes.string,
  title: PropTypes.string,
  users: PropTypes.array,
};

BoardCard.defaultProps = {
  coverPhoto: null,
  title: '',
  users: [],
};

export default BoardCard;