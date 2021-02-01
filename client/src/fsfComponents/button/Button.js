import React from 'react';
import styles from './Button.module.css';

const getType = (type) => {
  let elementType;
  switch (type) {
    case "primary":
      elementType = styles.primary;
      break;
    case "danger" :
      elementType = styles.danger;
      break;
    default:
      elementType = styles.info;
      break;
  }
  return elementType;
}

const getSize = (size) => {
  let elementSize;
  switch (size) {
    case "large":
      elementSize = styles.large;
      break;
    case "medium" :
      elementSize = styles.medium;
      break;
    default:
      elementSize = styles.small;
      break;
  }
  return elementSize;
}

const Button = (
  {
    type = "info",
    size  = "small",
    disabled,
    onClick,
    children = "Button",
    ...others
  }) => {
  let buttonType = getType(type);
  let buttonSize = getSize(size);

  return (
    <button
      onClick={onClick}
      className={`${styles.fsfButton} ${buttonType} ${buttonSize}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;