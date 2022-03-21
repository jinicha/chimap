import React, { useState } from 'react';
import Title from './Title';
import Map from './Map';
import NavBar from './NavBar';
import Bookmarks from './Bookmarks';
import Cursor from './Cursor';

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
    <div className="mvp">
      <Cursor />
      <Title />
      <div className="main">
        {display()}
      </div>
      <NavBar handleClick={handleClick} />
    </div>
  );
}
