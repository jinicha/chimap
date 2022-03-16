import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Search from './Search';
import PlacesList from './PlacesList';

export default function ShowResults({ closeModal }) {
  const [places, setPlaces] = useState([]);

  // get results from yelp api
  const handleSubmit = (location) => {
    const params = {
      term: 'korean fried chicken',
      location,
      categories: 'Korean',
      limit: 5,
      sort_by: 'best_match',
    };
    axios.get('/mvp/search', { params })
      .then((results) => {
        setPlaces(results.data.businesses);
      })
      .catch((err) => {
        console.log(err, 'err in get');
      });
  };

  // close modal on click
  const handleClick = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div>
      <button
        type="submit"
        onClick={handleClick}
      >
        Close
      </button>
      <Search handleSubmit={handleSubmit} />
      <PlacesList places={places} />
    </div>
  );
}

ShowResults.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
