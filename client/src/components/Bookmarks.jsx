import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Deck from './Deck';

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [cards, setCards] = useState([]);
  const getBookmarks = () => {
    axios.get('/mvp/bookmarks')
      .then((results) => {
        const temp = [];
        results.data.forEach((item) => {
          temp.push({
            name: item.name,
            image_url: item.image_url,
          });
        });
        setCards(temp);
        setBookmarks(results.data);
      })
      .catch((err) => {
        console.log(err, 'err in axios.get("/mvp/bookmarks")');
      });
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  return (
    <div className="bookmark">
      {bookmarks.length === 0 ? '' : <Deck cards={cards} />}
    </div>
  );
}
