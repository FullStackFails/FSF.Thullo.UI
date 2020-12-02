import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({size, onClickClose, children }) => {
  let sizeStyle = {};

  switch (size) {
    case "small":
      sizeStyle = styles.small;
      break;
    case "medium":
      sizeStyle = styles.medium;
      break;
    default:
      sizeStyle = styles.small;
      break;
  }


  return (
    <>
      <div className={styles.overlay} onClick={onClickClose}/>
      <div className={`${sizeStyle} ${styles.modal}`}>
        {children}
      </div>
    </>
  )
}

export default Modal;