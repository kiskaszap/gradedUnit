const User = require('./userSchema.js');
const userCreate = require('./createuser.js');
const fs = require('fs');

const ProfilePicSchema = require('./profilePicSchema.js');

const createUser = async (req, res) => {
  try {
    console.log(req.body);

    // Get the user data from the request body
    const userData = req.body;

    // Create a new user using the User model
    const savedUser = await userCreate(userData.email, userData.password);

    res.status(201).send(savedUser);
    console.log('user is saved');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
};
const loginUser = async (req, res) => {
  try {
    // Get the user data from the request body
    const userLog = req.body;

    // Create a new user using the User model
    const user = await User.findOne({
      email: userLog.email,
      password: userLog.password,
    });

    const userData = {
      name: user.name,
      phone: user.phone,
      address: user.address,
      _id: user._id,
      email: user.email,
      profilePicture: user.profilePicture,
      uploadedPictures: user.uploadedPictures,
      completedTraining: user.completedTraining,
      availability: user.availability,
      __v: user.__v,
    };
    req.session.user = userData;
    if (user.email === 'admin@cubscout.com' && user.password === 'admin123') {
      console.log('admin found');

      res.status(200).json({
        admin: true,
        authenticated: true,
        user: userData,
      });
    } else {
      console.log(userData);
      // console.log('User found');
      res.status(200).json({
        authenticated: true,
        user: userData,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(404).send('Error finding user');
  }
};
const dashboard = async (req, res) => {};
const userdetails = async (req, res) => {
  console.log(req.body);
  res.status(201).json({ data: 'userdetails updated ' });
};
const uploadProfilePicture = async (req, res) => {
  try {
    const useremail = req.query.email;
    console.log(req.query);

    const newProfilePicture = new ProfilePicSchema({
      imagePath: req.query.path,
      useremail: useremail,
    });

    const savedProfilePicture = await newProfilePicture.save();
    res.json(savedProfilePicture);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to upload profile picture' });
  }
};

module.exports = {
  createUser,
  loginUser,
  dashboard,
  userdetails,
  uploadProfilePicture,
};
