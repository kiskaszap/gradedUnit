// multerConfig.js

const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req.query.email, 'This is in the Multer config');
    const useremail = req.query.email;
    const dest = `./profilePics/${useremail}`;
    fs.mkdirSync(dest, { recursive: true });

    cb(null, dest);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    const timestamp = Date.now();
    cb(null, `${basename}-${timestamp}${ext}`);
  },
});

module.exports = storage;
