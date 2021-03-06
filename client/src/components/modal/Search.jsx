import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <form className="search" onSubmit={search}>
      <input
        className="search-field"
        type="text"
        placeholder="Enter City, State, or Zip"
        value={location}
        onChange={handleInput}
      />
      <input
        className="search-btn"
        type="submit"
        value="Search"
      />
    </form>
  );
}

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
