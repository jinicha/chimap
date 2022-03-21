const express = require('express');
const axios = require('axios');
const { API_KEY } = require('../config');
const db = require('../db');
const controller = require('../db/controllers/bkfc');

const app = express();

const PORT = 3002;

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());

app.get('/mvp/search', (req, res) => {
  controller.getFromDb(req.query.ids, (err, results) => {
    if (err) {
      res.send(400);
    } else {
      res.status(200).send(results);
    }
  });
});

app.post('/mvp/search', (req, res) => {
  // get data from yelp api
  const params = req.body;
  axios(
    {
      method: 'GET',
      url: 'https://api.yelp.com/v3/businesses/search',
      headers: { Authorization: `Bearer ${API_KEY}` },
      params,
    },
  )
    // save results to db
    .then((results) => {
      const ids = [];
      results.data.businesses.forEach((item) => {
        ids.push(item.id);
        controller.saveToDb(item, (err) => {
          if (err) {
            console.log(err, 'failed saving to db');
          } else {
            console.log(`saved ${item} to db`);
          }
        });
      });
      res.status(201).send(ids);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.get('/mvp/bookmarks', (req, res) => {
  controller.getBookmarks((err, results) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(results);
    }
  });
});

app.put('/mvp/bookmarks/save', (req, res) => {
  controller.addToBookmark({ key: req.body.key }, { bookmark: 'y' }, (err) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(204);
    }
  });
});

// app.put('/mvp/bookmarks/remove', (req, res) => {
//   controller.removeFromBookmark({ key: req.body.key }, { bookmark: null }, (err) => {
//     if (err) {
//       res.sendStatus(400);
//     } else {
//       res.sendStatus(204);
//     }
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} :)`);
});
