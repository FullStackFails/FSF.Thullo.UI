import React from 'react';
import styles from './Input.module.css';

const Input = ({placeholder, value, onChange}) => {
  return (
    <input
      type="text"
      className={styles.input}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
    />
  )
}

export default Input;