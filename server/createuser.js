const User = require('./userSchema');

const userCreate = async (email, password) => {
  const newUser = new User({
    name: '',
    phone: '',
    address: '',
    email: email,
    password: password,
    uploadedPictures: [],
    completedTraining: [],
    availability: [],
  });
  await newUser.save();
};
module.exports = userCreate;
