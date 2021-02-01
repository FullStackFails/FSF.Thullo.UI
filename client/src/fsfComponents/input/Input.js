import react from 'react';
import styles from './Input.module.css';

const Input = (
  {
    value,
    placeholder = "Enter a value",
    disabled,
    isValid,
    error,
    ...others
  }) => {
    const showErrorState = !isValid && !disabled;

     const inErrorClass = showErrorState ? styles.errorBorder : "";


  return (
    <>
    <input
      className={`${styles.fsfInput} ${inErrorClass}` }
      value={value}
      placeholder={placeholder}
      disabled={disabled}
    />
      { showErrorState &&
        <p className={styles.error}>{error}</p>
      }
    </>
  )
}

export default Input;