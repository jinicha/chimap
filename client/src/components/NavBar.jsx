import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

export default function NavBar({ handleClick }) {
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
    <Box id="navbar">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction id="search-icon" label="Search" icon={<SearchRoundedIcon fontSize="medium" />} onClick={getMap} />
        <BottomNavigationAction id="bookmark-icon" label="Bookmarks" icon={<BookmarksIcon fontSize="medium" />} onClick={getBookmarks} />
      </BottomNavigation>
    </Box>
  );
}

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
