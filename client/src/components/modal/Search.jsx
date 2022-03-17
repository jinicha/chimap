import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ShowResults.module.css';

export default function Search({ handleSubmit }) {
  const [location, setLocation] = useState('');

  const handleInput = (e) => {
    setLocation(e.target.value);
  };

  const search = (e) => {
    e.preventDefault();
    handleSubmit(location);
    setLocation('');
  };

  return (
    <form className={styles.search} onSubmit={search}>
      <input
        type="text"
        placeholder="Enter City, State, or Zip"
        value={location}
        onChange={handleInput}
      />
      <input
        type="submit"
        value="Search"
      />
    </form>
  );
}

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
