const multer = require('multer');
const path = require('path');
const fs = require('fs');
const GallerySchema = require('./gallerySchema');
let destin;

const gallerystorage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('Gallery multer is called');

    const useremail = req.query.email;
    // const sanitizedEmail = useremail.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    destin = `./galleryUploads/${useremail}`;
    fs.mkdirSync(destin, { recursive: true });
    console.log(destin);

    cb(null, destin);
  },
  filename: (req, file, cb) => {
    console.log('multer gallery is called');
    console.log(req.query, 'All gallery query');
    console.log(req.query.username, 'Gallery name');

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
        username: req.query.username,
      });

      await newGallery.save();
    };
    gallerySave();
  },
});

module.exports = gallerystorage;
