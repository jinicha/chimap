import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import PlaceItem from './PlaceItem';

export default function PlacesList({ places }) {
  const sort = _.sortBy(places, (item) => item.rating * item.review_count * -1);
  return (
    <div>
      {sort.map((item) => <PlaceItem item={item} key={item.id} />)}
    </div>
  );
}

PlacesList.propTypes = {
  places: PropTypes.instanceOf(Array).isRequired,
};
