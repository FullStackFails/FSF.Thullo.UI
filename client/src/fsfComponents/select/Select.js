import React, { useState, useRef, useEffect } from 'react';
import caret from './caret-down.svg';
import styles from './Select.module.css';

const Select = ({value, options, placeholder="Make a selection", disabled, onChange, ...others}) => {
  const node = useRef();  // Used for outside click handling
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value);

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


  const onSelected = o => {
    onChange(o);
    setSelected(o);
  }

  const disabledClass = disabled ? styles.disabled : "";
  const placeholderClass = !value || value === null ?
    styles.placeholder :
    null;

  return (
    // Ref for outside clicks
    <div style={{width: '200px'}} ref={node}> 
      <div
        className={`${styles.selectContainer} ${disabledClass} ${placeholderClass}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.select}>
          {selected?.label ?? placeholder}
        </div>
        <div className={styles.dropdownCaret} >
          <img src={caret} alt="caret-down"/>
        </div>
      </div>

      { isOpen && !disabled &&
        <div className={styles.options}>
          {options.map(o => {
            const selectedClass = o.value === selected.value ? styles.selected : null;
           return ( <div
              id={o.value}
              key={o.value}
              onClick={() => onSelected(o)}
              className={`${styles.option} ${selectedClass}`}>
              {o.label}  
            </div>);
          })}
        </div>
      }
    </div>
  )
}

export default Select