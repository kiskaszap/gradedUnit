const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  useremail: String,
  imagePath: String,
});

const ProfilePicSchema = mongoose.model('ProfilePicSchema', imageSchema);

module.exports = ProfilePicSchema;
