import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import Button from '../button/Button';

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
      <Button
        // NOTE: onClick evt handler below will get replaced 
        // in the future with a propTypes callback function
        onClick={() => { console.log(searchTerm) }}
        btnText={props.btnText}
      />
    </div>
  );
}

export default SearchBar;