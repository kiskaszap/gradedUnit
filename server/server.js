//modules
const express = require('express');
const app = express();
const db = require('./mongodb.js');
const multer = require('multer');
const upload = multer();

//middlewares
const middlewares = require('./middlewares.js');
//controllers
const controller = require('./controllers.js');
const {
  parseFormData,
  uploadSingle,
  handleMultipleFields,
} = require('./localMiddlewares');

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

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
