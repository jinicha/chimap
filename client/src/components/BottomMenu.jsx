import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

export default function BottomMenu() {
  const [value, setValue] = React.useState(0);

  const getBookmarks = (e) => {
    e.preventDefault();
    console.log('clicked');
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
        <BottomNavigationAction label="Search" icon={<SearchRoundedIcon />} />
        <BottomNavigationAction label="Bookmarks" icon={<BookmarksIcon />} onClick={getBookmarks} />
        <BottomNavigationAction label="Visited" icon={<CheckCircleOutlineRoundedIcon />} />
      </BottomNavigation>
    </Box>
  );
}
