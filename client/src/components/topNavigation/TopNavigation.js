import React from 'react';
import styles from './TopNavigation.module.css';
import ThulloLogo from '../../Logo-small.svg';
import SearchBar from '../searchBar/SearchBar';
import ProfileDropDown from '../profileDropDown/ProfileDropDown';
import HomeLogo from '../homeLogo/HomeLogo';

const TopNavigation = (props) => {
  return (
    <nav className={styles.siteNav}>
      <ul className={styles.siteNavContainer}>
        <li className={styles.navLeft}>
          <a href='/'>
            <HomeLogo logo={ThulloLogo} homeLogoText="Thullo" />
          </a>
        </li>
        <li>
          <SearchBar placeholder='Keyword...' label='Search' />
        </li>
        <li>
          <ProfileDropDown />
        </li>
      </ul>
    </nav>
  );
}

export default TopNavigation;