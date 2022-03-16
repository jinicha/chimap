import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function PlaceItem({ item }) {
  return (
    <div>
      {item.name}
      {' '}
      {item.rating * item.review_count >= 2000 ? 'Must Go' : ''}
      {' '}
      {item.is_closed ? 'Closed' : 'Open'}
    </div>
  );
}
PlaceItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};
