import React from 'react';
import styles from './Button.module.css';

const Button = ({type, onClick, children}) => {
  let buttonStyle;
  switch (type) {
    case "primary":
      buttonStyle = styles.primary;
      break;
    case "danger" :
      buttonStyle = styles.danger;
      break;
    default:
      buttonStyle = styles.info;
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`${styles.fsfButton} ${buttonStyle}`}
    >
      {children}
    </button>
  )
}

export default Button;