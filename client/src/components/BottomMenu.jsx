import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

export default function BottomMenu({ handleClick }) {
  const [value, setValue] = useState(0);

  const getBookmarks = (e) => {
    e.preventDefault();
    handleClick('bookmarks');
  };

  const getMap = (e) => {
    e.preventDefault();
    handleClick('map');
  };

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Search" icon={<SearchRoundedIcon />} onClick={getMap} />
        <BottomNavigationAction label="Bookmarks" icon={<BookmarksIcon />} onClick={getBookmarks} />
      </BottomNavigation>
    </Box>
  );
}

BottomMenu.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
