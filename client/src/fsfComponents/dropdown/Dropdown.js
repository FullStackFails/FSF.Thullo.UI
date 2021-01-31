import React, { useState } from 'react';
import caret from './caret-down.svg';
import styles from './Dropdown.module.css';

const Dropdown = ({header, options, disabled, ...others}) => {
  const [isOpen, setIsOpen] = useState(false);

  const disabledClass = disabled ? styles.disabled : "";
  console.log(disabledClass)

  return (
    <div style={{width: '200px'}}>
      <div
        className={`${styles.headerContainer} ${disabledClass}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.header}>
          {header}
        </div>
        <div className={styles.dropdownCaret} >
          <img src={caret} alt="caret-down"/>
        </div>
      </div>

      { isOpen && !disabled &&
        <div className={styles.options}>
          {options.map(o => 
            <div id={o.value} onClick={o.onClick} className={styles.option}>
              {o.label}  
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default Dropdown