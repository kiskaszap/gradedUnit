const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  date: String,
  title: String,
  descreption: String,
  address: String,
  duration: String,
  filePath: String,
});

const EventSchema = mongoose.model('EventSchema', eventSchema);

module.exports = EventSchema;
