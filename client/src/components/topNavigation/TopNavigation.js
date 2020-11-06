import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import ProfileDropDown from '../profileDropDown/ProfileDropDown';
import ThulloLogo from '../../Logo-small.svg';
import styles from './TopNavigation.module.css';

const TopNavigation = (props) => {
  return (
    <div className={styles.topNavigationContainer}>
      <div className={styles.homeIconContainer}>
        <img src={ThulloLogo} alt='Thullo Icon' />
        <span className={styles.homeIconText}>Thullo</span>
      </div>
      <SearchBar
        placeholder='Keyword...'
        btnText='Search'
      />
      <ProfileDropDown />
    </div>
  );
}

export default TopNavigation;