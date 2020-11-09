import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ primary, label, onClick, ...props }) => {
  const buttonType = primary ? styles.buttonPrimary : styles.buttonSecondary;

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
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  onClick: undefined,
};

export default Button;