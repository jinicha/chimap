import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Deck from './Deck';

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [cards, setCards] = useState([]);
  const getBookmarks = () => {
    axios.get('/mvp/bookmarks')
      .then((results) => {
        const temp = results.data.map((item) => item.image_url);
        setCards(temp);
        setBookmarks(results.data);
      })
      .catch((err) => {
        console.log(err, 'err in BootomMenu getBookmarks');
      });
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  return (
    <div>
      {bookmarks.length === 0 ? 'Add right now!' : <Deck cards={cards} />}
    </div>
  );
}
