const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mvp');

const db = mongoose.connection;

db.on('error', () => {
  console.log('Mongoose connection error :(');
});

db.once('open', () => {
  console.log('Mongoose connected successfully :)');
});

module.exports = db;
