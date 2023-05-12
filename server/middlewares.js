const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const crypto = require('crypto');
const app = express();

const sessionSecret = crypto.randomBytes(64).toString('hex');

// Use body-parser middleware to parse request bodies
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(
  session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);
app.use('/profilePics', express.static('profilePics'));

module.exports = app;
