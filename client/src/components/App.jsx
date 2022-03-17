import React, { useState } from 'react';
import axios from 'axios';
import Title from './Title';
import Map from './Map';
import BottomMenu from './BottomMenu';

export default function App() {
  return (
    <div>
      <Title />
      click on a state to start
      <Map />
      <BottomMenu />
    </div>
  );
}
