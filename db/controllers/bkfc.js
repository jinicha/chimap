const Bkfc = require('../models/bkfc');

const getBookmarks = (cb) => {
  Bkfc.find({ bookmark: 'y' })
    .then((results) => {
      cb(null, results);
    })
    .catch((err) => {
      cb(err, null);
    });
};

const addToBookmark = (filter, data, cb) => {
  Bkfc.updateOne(filter, {
    key: data.key,
    name: data.name,
    rating: data.rating,
    image_url: data.image_url,
    place_url: data.place_url,
    bookmark: 'y',
  }, { upsert: true })
    .then(() => {
      cb(null);
    })
    .catch((err) => {
      cb(err);
    });
};

module.exports = { getBookmarks, addToBookmark };
