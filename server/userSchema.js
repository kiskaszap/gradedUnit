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

  disclosure: [
    {
      type: Buffer,
    },
  ],
  completedTraining: [
    {
      type: String,
      enum: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
    },
  ],
  availability: [
    {
      type: String,
      enum: ['0', '1', '2', '3', '4', '5', '6', '7'],
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
// const ProfilePicSchema = mongoose.model('ProfilePicSchema', imageSchema);

// module.exports = ProfilePicSchema;
