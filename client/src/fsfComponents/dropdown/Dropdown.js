import React, { useState, useRef, useEffect } from 'react';
import caret from './caret-down.svg';
import styles from './Dropdown.module.css';

const Dropdown = ({header, options, disabled, ...others}) => {
  const node = useRef();  // Used for outside click handling
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = e => {  // Handles outside clicks
    if (node.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => { // Event listener for outside clicks
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const disabledClass = disabled ? styles.disabled : "";
  console.log(disabledClass)

  return (
    // Ref for outside clicks
    <div style={{width: '200px'}} ref={node}> 
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