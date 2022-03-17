const Bkfc = require('../models/bkfc');

const addToBookmark = (filter, data, cb) => {
  Bkfc.updateOne(filter, {
    key: data.key,
    name: data.name,
    rating: data.rating,
    img_url: data.img_url,
    place_url: data.place_url,
    bookmark: 'y',
  }, { upsert: true }, (err) => {
    if (err) {
      cb(err);
    } else {
      cb(null);
    }
  });
};

const addToVisited = () => {

};

module.exports = { addToBookmark, addToVisited };
