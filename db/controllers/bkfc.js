const Bkfc = require('../models/bkfc');

const getFromDb = (ids, cb) => {
  Bkfc.find().where('key').in(ids).exec((err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const saveToDb = (data, cb) => {
  Bkfc.updateOne({ key: data.id }, {
    key: data.id,
    name: data.name,
    rating: data.rating,
    review_count: data.review_count,
    image_url: data.image_url,
    place_url: data.url,
  }, { upsert: true })
    .then(() => {
      cb(null);
    })
    .catch((err) => {
      cb(err);
    });
};

const getBookmarks = (cb) => {
  Bkfc.find({ bookmark: 'y' })
    .then((results) => {
      cb(null, results);
    })
    .catch((err) => {
      cb(err, null);
    });
};

const addToBookmark = (filter, update, cb) => {
  Bkfc.updateOne(filter, update)
    .then(() => {
      cb(null);
    })
    .catch((err) => {
      cb(err);
    });
};

// const removeFromBookmark = (filter, update, cb) => {
//   Bkfc.updateOne(filter, update)
//     .then(() => {
//       cb(null);
//     })
//     .catch((err) => {
//       cb(err);
//     });
// };

module.exports = {
  getFromDb, saveToDb, getBookmarks, addToBookmark,
};
