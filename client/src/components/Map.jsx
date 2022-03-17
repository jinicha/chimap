import React, { useState } from 'react';
import USAMap from 'react-usa-map';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ShowResults from './modal/ShowResults';

export default function Map() {
  const [click, setClick] = useState(false);
  const [stateName, setStateName] = useState('');
  const openModal = (e) => {
    setClick(true);
    setStateName(e.target.dataset.name);
  };

  const closeModal = () => setClick(false);

  return (
    <div className="map">
      <USAMap onClick={openModal} />
      <Modal
        open={click}
        onClose={closeModal}
      >
        <Box id="modal-container">
          <ShowResults closeModal={closeModal} stateName={stateName} />
        </Box>
      </Modal>
    </div>
  );
}
