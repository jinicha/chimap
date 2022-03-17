import React, { useState } from 'react';
import Title from './Title';
import Map from './Map';
import BottomMenu from './BottomMenu';
import Bookmarks from './Bookmarks';

export default function App() {
  const [page, setPage] = useState('map');
  const handleClick = (selected) => {
    setPage(selected);
  };

  const display = () => {
    if (page === 'map') {
      return <Map />;
    }
    return <Bookmarks />;
  };

  return (
    <div>
      <Title />
      click on a state to start
      {display()}
      <BottomMenu handleClick={handleClick} />
    </div>
  );
}
