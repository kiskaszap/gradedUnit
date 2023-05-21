const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema({
  id: Number,
  title: String,
  startDate: Date,
  endDate: Date,
  allDay: Boolean,
  notes: String,
  participants: Array,
});

const CalendarSchema = mongoose.model('CalendarSchema', calendarSchema);

module.exports = CalendarSchema;
