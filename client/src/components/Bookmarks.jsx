import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const getBookmarks = () => {
    axios.get('/mvp/bookmarks')
      .then((results) => {
        setBookmarks(results.data);
      })
      .catch((err) => {
        console.log(err, 'err in BootomMenu getBookmarks');
      });
  };

  useEffect(() => {
    getBookmarks();
  });

  return (
    <div>
      {bookmarks.length === 0 ? 'nothing' : bookmarks[0].name}
    </div>
  );
}
