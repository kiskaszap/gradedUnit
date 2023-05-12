const User = require('./userSchema.js');
const userCreate = require('./createuser.js');
const fs = require('fs');

const ProfilePicSchema = require('./profilePicSchema.js');
const DesclosureSchema = require('./disclosureSchema.js');

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

  const { name, phone, address, email, completedTraining, availability } =
    req.body;

  const update = {
    name,
    phone,
    address,
    email,
    completedTraining,
    availability,
  };

  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: req.body.email },
      { $set: update },
      { new: true }
    );

    console.log('Updated user:', updatedUser);
    // Handle the updated document
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error:', error);
    // Handle any errors that occurred during the update
    res.status(500).json({ error: 'An error occurred during the update' });
  }
};

const uploadProfilePicture = async (req, res) => {
  try {
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to upload profile picture' });
  }
};
const uploadDisclosure = async (req, res) => {
  try {
    console.log('Dislosure endpoint is called');
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to upload disclosure' });
  }
};

const fetchedData = async (req, res) => {
  console.log(req.body, 'Fetched data');
  try {
    const data = await ProfilePicSchema.findOne({ useremail: req.body.email });
    if (data) {
      const { imagePath } = data;
      console.log(imagePath);
      let newPath = imagePath.slice(1);
      res.status(200).json(newPath);
    } else {
      return;
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data' });
  }
};
const fetchedDetails = async (req, res) => {
  console.log(req.body, 'Fetched details');
  try {
    const data = await User.findOne({ email: req.body.email });
    if (data) {
      res.status(200).json(data);
    } else {
      return;
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data' });
  }
};

module.exports = {
  createUser,
  loginUser,
  dashboard,
  userdetails,
  uploadProfilePicture,
  uploadDisclosure,
  fetchedData,
  fetchedDetails,
};
