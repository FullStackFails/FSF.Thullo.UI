import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchInput.module.css';

const SearchInput = ({ searchTerm, placeholder, onChange, ...props }) => {
  return (
    <input
      type="search"
      className={styles.searchTerm}
      value={searchTerm}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      {...props}
    />
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  searchTerm: PropTypes.string,
  onChange: PropTypes.func,
};

SearchInput.defaultProps = {
  placeholder: '',
  searchTerm: '',
  onChange: undefined,
};

export default SearchInput;