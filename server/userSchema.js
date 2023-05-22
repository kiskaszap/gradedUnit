const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
  profilePicture: {
    type: String,
  },

  disclosure: {
    type: String,
  },
  status: {
    type: String,
  },

  completedTraining: [
    {
      type: String,
    },
  ],
  availability: {
    type: String,
  },
});

module.exports = mongoose.model('User', userSchema);
// const ProfilePicSchema = mongoose.model('ProfilePicSchema', imageSchema);

// module.exports = ProfilePicSchema;
