import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import SearchInput from '../searchInput/SearchInput';
import Button from '../button/Button';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchTerm}>
        <SearchInput
          onChange={setSearchTerm}
          placeholder="Keyword..." />
      </div>
      <Button
        onClick={() => props.onClick(searchTerm)}
        label={props.label}
      />
    </div>
  );
};

SearchBar.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

SearchBar.defaultProps = {
  primary: true,
  onClick: undefined,
};

export default SearchBar;