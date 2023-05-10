// multerMiddlewares.js

const multer = require('multer');
const storage = require('./multerConfig.js');

const parseFormData = multer().none();
const uploadSingle = multer({ storage }).single('profilePicture');
const handleMultipleFields = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
}).fields([{ name: 'profilePicture', maxCount: 1 }, { name: 'email' }]);
module.exports = {
  parseFormData,
  uploadSingle,
  handleMultipleFields,
};
