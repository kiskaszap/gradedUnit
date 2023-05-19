const mongoose = require('mongoose');

const disclosureSchema = new mongoose.Schema({
  useremail: String,
  filePath: String,
  status: String,
});

const DisclosureSchema = mongoose.model('DisclosureSchema', disclosureSchema);

module.exports = DisclosureSchema;
