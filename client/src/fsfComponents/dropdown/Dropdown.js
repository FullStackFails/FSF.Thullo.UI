import React, { useState } from 'react';
import caret from './caret-down.svg';
import styles from './Dropdown.module.css';

const Dropdown = ({header, options, ...others}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        {header}
      </div>
      <div className={styles.dropdownCaret} onClick={() => setIsOpen(!isOpen)}>
        <img src={caret} alt="caret-down"/>
      </div>
    </div>

    { isOpen &&
      <div className={styles.options}>
        {options.map(o => 
          <div id={o.value} onClick={o.onClick} className={styles.option}>
            {o.label}  
          </div>
        )}
      </div>
    }
    </>
  )
}

export default Dropdown