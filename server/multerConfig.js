// multerConfig.js

const multer = require('multer');
const path = require('path');
const fs = require('fs');
const ProfilePicSchema = require('./profilePicSchema');
let dest;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req.query.email, 'This is in the Multer config');
    const useremail = req.query.email;
    dest = `./profilePics/${useremail}`;
    fs.mkdirSync(dest, { recursive: true });
    console.log(dest);

    cb(null, dest);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    const timestamp = Date.now();
    cb(null, `${basename}-${timestamp}${ext}`);
    const userSave = async () => {
      const newProfilePicture = new ProfilePicSchema({
        imagePath: `${dest + '/' + basename + '-' + timestamp + ext}`,
        useremail: req.query.email,
      });

      await newProfilePicture.save();
    };
    userSave();
  },
});

module.exports = storage;
