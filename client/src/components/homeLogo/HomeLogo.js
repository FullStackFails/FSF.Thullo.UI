import React from 'react';
import styles from './HomeLogo.module.css';

const HomeLogo = (props) => (
  <div className={styles.homeLogoContainer}>
    <img src={props.logo} alt='Thullo Icon' />
    <p className={styles.homeLogoText}>{props.homeLogoText}</p>
  </div>
);

export default HomeLogo;