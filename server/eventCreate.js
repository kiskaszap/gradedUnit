const Calendar = require('./calendarSchema');

const EventCreate = async (
  id,
  title,
  startDate,
  endDate,
  allDay,
  notes,
  participants
) => {
  const newEvent = new Calendar({
    id: id,
    title: title,
    startDate: startDate,
    endDate: endDate,
    allDay: allDay,
    notes: notes,
    participants: participants,
  });
  await newEvent.save();
};
module.exports = EventCreate;
