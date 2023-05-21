const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  useremail: String,
  filePath: String,
  status: String,
});

const GallerySchema = mongoose.model('GallerySchema', gallerySchema);

module.exports = GallerySchema;
