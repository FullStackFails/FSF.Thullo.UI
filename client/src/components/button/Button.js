import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ type, label, onClick, ...props }) => {
  let buttonType = {};

  switch (type) {
    case "primary":
      buttonType = styles.buttonPrimary;
      break;
    case "secondary":
      buttonType = styles.buttonSecondary;
      break;
    case "borderless":
      buttonType = styles.buttonBorderless;
      break;
  }

  return (
    <button
      onClick={onClick}
      className={buttonType}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "primary",
  onClick: undefined,
};

export default Button;