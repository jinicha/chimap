import React, { useState } from 'react';
import USAMap from 'react-usa-map';
import ShowResults from './modal/ShowResults';

export default function Map() {
  const [click, setClick] = useState(false);
  const openModal = (e) => {
    console.log(e.target.dataset.name);
    setClick(true);
  };

  const closeModal = () => {
    setClick(false);
  };

  return (
    <div>
      <USAMap onClick={openModal} />
      {click ? <ShowResults closeModal={closeModal} /> : ''}
    </div>
  );
}
