//modules
const express = require('express');
const app = express();
const db = require('./mongodb.js');
//middlewares
const middlewares = require('./middlewares.js');
//controllers
const controller = require('./controllers.js');

//invoking middlewares
app.use(middlewares);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.post('/register', controller.createUser);
app.post('/login', controller.loginUser);

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
