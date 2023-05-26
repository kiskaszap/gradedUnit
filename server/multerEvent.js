const multer = require('multer');
const path = require('path');
const fs = require('fs');
const EventSchema = require('./eventSchema');
let destina;

const eventstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('Event multer is called');
    // const sanitizedEmail = useremail.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    destina = `./eventUploads`;
    fs.mkdirSync(destina, { recursive: true });
    console.log(destina);

    cb(null, destina);
  },
  filename: (req, file, cb) => {
    console.log('multer event is called');
    console.log(req.query, 'All event query');

    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    const timestamp = Date.now();
    cb(null, `${basename}-${timestamp}${ext}`);
    const eventSave = async () => {
      console.log('Event function is called');
      const newEvent = new EventSchema({
        filePath: `${destina + '/' + basename + '-' + timestamp + ext}`,
        date: req.query.date,
        title: req.query.title,
        descreption: req.query.descreption,
        address: req.query.address,
        duration: req.query.duration,
      });

      await newEvent.save();
    };
    eventSave();
  },
});

module.exports = eventstorage;
