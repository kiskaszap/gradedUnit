// multerMiddlewares.js

const multer = require('multer');
const storage = require('./multerConfig.js');
const disclosurestorage = require('./multerDisclosure.js');
const gallerystorage = require('./multerGallery.js');

const parseFormData = multer().none();
const uploadSingle = multer({ storage }).single('profilePicture');
const uploadDisclosure = multer({ disclosurestorage }).single('dislosure');
const handleMultipleFields = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
}).fields([{ name: 'profilePicture', maxCount: 1 }, { name: 'email' }]);
const handleDisclosure = multer({
  storage: disclosurestorage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
}).fields([{ name: 'disclosure', maxCount: 1 }, { name: 'email' }]);
// const handleFileUpload = multer({
//   storage: fileStorage,
//   limits: { fileSize: 1024 * 1024 * 10 }, // Limit file size to 10MB
// }).fields([{ name: 'disclosure', maxCount: 1 }, { name: 'email' }]);
const uploadGallery = multer({
  storage: gallerystorage,
});

module.exports = {
  parseFormData,
  uploadSingle,
  handleMultipleFields,
  handleDisclosure,
  uploadDisclosure,
  uploadGallery,
};
