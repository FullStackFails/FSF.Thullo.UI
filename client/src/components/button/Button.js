import React from 'react';
import styles from './Button.module.css';

const Button = (props) => (
  <button
    onClick={props.onClick}
    className={styles.button}
  >
    {props.btnText}
  </button>
);

export default Button;