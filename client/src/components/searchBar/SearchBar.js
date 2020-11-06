import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="search"
        className={styles.searchTerm}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder={props.placeholder} />
      <button
        className={styles.searchButton}
        // NOTE: onClick evt handler below will get replaced 
        // in the future with a propTypes callback function
        onClick={() => { console.log(searchTerm) }}
      >
        {props.btnText}
      </button>
    </div>
  );
}

export default SearchBar;