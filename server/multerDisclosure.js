const multer = require('multer');
const path = require('path');
const fs = require('fs');
const DisclosureSchema = require('./disclosureSchema');
const User = require('./userSchema');
let desti;

const disclosurestorage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req.query.email, 'This is in the disclosure config');
    const useremail = req.query.email;
    // const sanitizedEmail = useremail.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    desti = `./fileUploads/${useremail}`;
    fs.mkdirSync(desti, { recursive: true });
    console.log(desti);

    cb(null, desti);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    const timestamp = Date.now();
    cb(null, `${basename}-${timestamp}${ext}`);
    const disclosureSave = async () => {
      console.log('Disclosure function is called');
      const filter = { email: req.query.email };
      const update = {
        disclosure: `${desti + '/' + basename + '-' + timestamp + ext}`,
      };
      const newDisclosure = await User.findOneAndUpdate(filter, update, {
        new: true,
      });

      await newDisclosure.save();
    };
    disclosureSave();
  },
});

module.exports = disclosurestorage;
