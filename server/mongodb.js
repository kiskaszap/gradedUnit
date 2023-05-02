const mongoose = require('mongoose');
require('dotenv').config();
const mongoDBUrl = process.env.MONGODB_URI;

mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});
module.exports = db;
