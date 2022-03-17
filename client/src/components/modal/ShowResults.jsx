import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import Search from './Search';
import PlacesCarousel from './PlacesCarousel';

export default function ShowResults({ closeModal, stateName }) {
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
        console.log(err, 'err in axiox.get("/mvp/search")');
      });
  };

  // close modal on click
  const handleClick = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-inner">
        <button
          className="close-btn"
          type="submit"
          onClick={handleClick}
        >
          <CloseIcon fontSize="inherit" />
        </button>
        <div className="modal-title">
          Find the best Korean Fried Chicken in
          {' '}
          {stateName}
        </div>
        <Search handleSubmit={handleSubmit} />
        {places.length === 0 ? <div /> : <PlacesCarousel places={places} />}
      </div>
    </div>
  );
}

ShowResults.propTypes = {
  closeModal: PropTypes.func.isRequired,
  stateName: PropTypes.string.isRequired,
};
