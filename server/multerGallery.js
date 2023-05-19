const multer = require('multer');
const path = require('path');
const fs = require('fs');
const GallerySchema = require('./gallerySchema');
let destin;

const gallerystorage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req.query.email, 'This is in the disclosure config');
    const useremail = req.query.email;
    // const sanitizedEmail = useremail.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    destin = `./galleryUploads/${useremail}`;
    fs.mkdirSync(destin, { recursive: true });
    console.log(destin);

    cb(null, destin);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    const timestamp = Date.now();
    cb(null, `${basename}-${timestamp}${ext}`);
    const gallerySave = async () => {
      console.log('Gallery function is called');
      const newGallery = new GallerySchema({
        filePath: `${destin + '/' + basename + '-' + timestamp + ext}`,
        useremail: req.query.email,
        status: 'pending',
      });

      await newGallery.save();
    };
    gallerySave();
  },
});

module.exports = gallerystorage;
