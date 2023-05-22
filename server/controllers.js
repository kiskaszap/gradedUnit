const User = require('./userSchema.js');
const userCreate = require('./createuser.js');
const eventCreate = require('./eventCreate.js');
const fs = require('fs');

const ProfilePicSchema = require('./profilePicSchema.js');
const DesclosureSchema = require('./disclosureSchema.js');
const GallerySchema = require('./gallerySchema.js');
const CalendarSchema = require('./calendarSchema.js');

const createUser = async (req, res) => {
  try {
    // Get the user data from the request body
    const userData = req.body;

    // Create a new user using the User model
    const savedUser = await userCreate(userData.email, userData.password);

    res.status(201).send(savedUser);
    console.log('User created');
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
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to upload disclosure' });
  }
};

const fetchedData = async (req, res) => {
  // console.log(req.body, 'Fetched data');
  try {
    const data = await User.findOne({ email: req.body.email });
    if (data) {
      console.log(data);
      const { profilePicture } = data;

      let newPath = profilePicture.slice(1);
      console.log(newPath);
      res.status(200).json(newPath);
    } else {
      return;
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data' });
  }
};
const fetchedDetails = async (req, res) => {
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
const uploadGalleryController = async (req, res) => {
  // Send a response back to the client
  res.status(200).json({ message: 'Files uploaded successfully.' });
};
const pendingPictures = async (req, res) => {
  console.log(req.body);
  try {
    const data = await GallerySchema.find({ useremail: req.body.email });
    if (data) {
      res.status(200).json(data);
    } else {
      return;
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data' });
  }
};
const disclosureFetch = async (req, res) => {
  try {
    const data = await DesclosureSchema.findOne({ useremail: req.body.email });
    if (data) {
      res.status(200).json({ data: 'Uploaded', status: data.status });
    } else {
      res.status(404).json({ data: 'Isn`t found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data' });
  }
};
const calendar = async (req, res) => {
  const calendarDataArray = req.body.updatedData;

  try {
    const responseData = [];

    for (let calendarItemData of calendarDataArray) {
      const existingItem = await CalendarSchema.findOne({
        id: calendarItemData.id,
      });

      if (existingItem) {
        const updatedItem = await CalendarSchema.findByIdAndUpdate(
          existingItem._id,
          calendarItemData,
          { new: true }
        );
        responseData.push(updatedItem);
      } else {
        const newCalendarItem = new CalendarSchema(calendarItemData);
        const savedItem = await newCalendarItem.save();
        responseData.push(savedItem);
      }
    }

    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error handling calendar items');
  }
};

const calendarFetch = async (req, res) => {
  console.log('CalendarFetch endpoint is called');
  console.log(req.body);

  try {
    const calendarFetch = await CalendarSchema.find({});
    res.send(calendarFetch);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data' });
  }
};
const fetchUsers = async (req, res) => {
  console.log('Fetchusers endpoint called');
  try {
    const data = await User.find({});

    if (data) {
      console.log(data);
      res.status(200).json(data);
    } else {
      return;
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data' });
  }
};
const downloadDisclosure = async (req, res) => {
  console.log('DownloadDisclosure endpoint called');
  // use req.query to access the email
  const { email } = req.query;
  console.log(email);
  try {
    const data = await User.findOne({ email });

    if (data) {
      console.log(data.disclosure);
      const newDisclosurePath = `${data.disclosure.slice(2)}`;
      res.download(newDisclosurePath);
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
  uploadGalleryController,
  fetchedData,
  fetchedDetails,
  fetchUsers,
  pendingPictures,
  disclosureFetch,
  calendar,
  calendarFetch,
  downloadDisclosure,
};
