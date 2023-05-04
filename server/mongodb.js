const mongoose = require('mongoose');
require('dotenv').config();

const mongoDBUrl = process.env.MONGODB_URI;
const databaseName = 'CubScout';

mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: databaseName, // Specify the database name here
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log(`Connected to MongoDB database '${databaseName}'`);
});

module.exports = db;
