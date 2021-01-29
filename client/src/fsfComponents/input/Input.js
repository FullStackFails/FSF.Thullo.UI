import react from 'react';
import styles from './Input.module.css';

const Input = ({value, placeholder, ...others}) => {
  return (
    <input
      className={styles.fsfInput}
      value={value}
      placeholder={placeholder ?? 'Enter a value...'}
    />
  )
}

export default Input;