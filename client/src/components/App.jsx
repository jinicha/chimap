import React, { useState } from 'react';
import axios from 'axios';
import Title from './Title';
import Map from './Map';

export default function App() {
  return (
    <div>
      <Title />
      <Map />
    </div>
  );
}
