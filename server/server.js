//modules
const express = require('express');
const app = express();
const db = require('./mongodb');

//middlewares
const middlewares = require('./middlewares.js');

//controllers
const controller = require('./controllers.js');
const { handleMultipleFields } = require('./localMiddlewares');
const disclosurestorage = require('./multerDisclosure');
const { uploadGallery, handleDisclosure } = require('./localMiddlewares');

//invoking middlewares
app.use(middlewares);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.post('/register', controller.createUser);
app.post('/login', controller.loginUser);
app.post('/dashboard', controller.dashboard);
app.post('/userdetails', controller.userdetails);
app.post(
  '/uploadProfilePicture',
  handleMultipleFields,

  controller.uploadProfilePicture
);
app.post('/uploadDisclosure', handleDisclosure, controller.uploadDisclosure);
app.post('/fetchedData', controller.fetchedData);
app.post('/fetchedDetails', controller.fetchedDetails);
app.post(
  '/uploadGallery',
  uploadGallery.array('images', 5),
  controller.uploadGalleryController
);
app.post('/pendingPictures', controller.pendingPictures);
app.post('/dislosureFetch', controller.disclosureFetch);
app.post('/calendar', controller.calendar);
app.post('/calendarDelete', controller.calendarDelete);
app.get('/calendarFetch', controller.calendarFetch);

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
