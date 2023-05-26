const User = require('./userSchema.js');
const userCreate = require('./createuser.js');
const bcrypt = require('bcrypt');
const DesclosureSchema = require('./disclosureSchema.js');
const GallerySchema = require('./gallerySchema.js');
const CalendarSchema = require('./calendarSchema.js');
const EventSchema = require('./eventSchema.js');

const createUser = async (req, res) => {
  try {
    // Get the user data from the request body
    const userData = req.body;
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash the user's password using the generated salt
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    // Create a new user using the User model
    const savedUser = await userCreate(userData.email, hashedPassword);

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

    // Find the user by email
    const user = await User.findOne({ email: userLog.email });

    if (!user) {
      // User not found
      return res.status(404).send('User not found');
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(userLog.password, user.password);

    if (!passwordMatch) {
      // Password does not match
      return res.status(401).send('Invalid password');
    }

    // Create a user data object to send back in the response
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

    if (user.email === 'admin@cubscout.com' && passwordMatch) {
      console.log('Admin found');

      res.status(200).json({
        admin: true,
        authenticated: true,
        user: userData,
      });
    } else {
      console.log('User found');
      res.status(200).json({
        authenticated: true,
        user: userData,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error finding user');
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
  console.log('Fetched data endpoint is called');
  try {
    const data = await User.findOne({ email: req.body.email });
    if (data) {
      console.log(data);
      const { profilePicture, status } = data;

      let newPath = profilePicture.slice(1);
      console.log(newPath);
      res.status(200).json({ newPath: newPath, status: status });
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
  const { email } = req.body;
  console.log(email);
  try {
    const data = await User.findOne({ email });

    if (data) {
      console.log(data.disclosure);
      const newDisclosurePath = `${data.disclosure.slice(2)}`;
      console.log(newDisclosurePath);
      res.status(200).json({ data: newDisclosurePath });
    } else {
      return;
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data' });
  }
};
const approveUser = async (req, res) => {
  console.log('approveUser endpoint called');
  const { email } = req.body;
  console.log(email);

  try {
    const userUpdate = await User.findOneAndUpdate(
      { email }, // Filter to find the user by email
      { status: 'approved' }, // Update the status to 'approved'
      { new: true } // Set { new: true } to return the updated document instead of the original one
    );

    if (userUpdate) {
      console.log('Status changed');
      res.status(200).json({ message: 'User approved successfully' });
    } else {
      console.log('User not found');
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error approving user' });
  }
};

const removeUser = async (req, res) => {
  console.log('removeUser endpoint called');
  // use req.query to access the email
  const { email } = req.body;
  try {
    const userDelete = await User.findOneAndDelete({ email: email });
    if (!userDelete) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
  }
};
const collectingPictures = async (req, res) => {
  try {
    const collectedPictures = await GallerySchema.find({});
    if (!collectedPictures) {
      return res.status(404).json({ message: 'Pictures not found' });
    }

    return res.status(200).json({ collectedPictures });
  } catch (error) {
    console.log(error);
  }
};
const deleteUserPicture = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    const deletePicture = await GallerySchema.findOneAndDelete({ _id: id });
    if (!deletePicture) {
      return res.status(404).json({ message: 'Pictures not found' });
    }

    return res.status(200).json({ data: 'deleted' });
  } catch (error) {
    console.log(error);
  }
};
const approveUserPicture = async (req, res) => {
  const { id } = req.body;
  console.log(id);

  const filter = { _id: id };
  const update = {
    status: 'approved',
  };

  try {
    const updatePicture = await GallerySchema.findOneAndUpdate(filter, update, {
      new: true,
    });
    if (!updatePicture) {
      return res.status(404).json({ message: 'Pictures not found' });
    }

    return res.status(200).json({ data: 'approved' });
  } catch (error) {
    console.log(error);
  }
};
const galleryCollect = async (req, res) => {
  try {
    const galleryCollect = await GallerySchema.find({ status: 'approved' });
    if (!galleryCollect) {
      return res.status(404).json({ message: 'Pictures not found' });
    }

    return res.status(200).json({ data: galleryCollect });
  } catch (error) {
    console.log(error);
  }
};
const createEvent = async (req, res) => {
  try {
    res.status(201).json({ event: 'created' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
};
const eventCollect = async (req, res) => {
  try {
    const eventCollect = await EventSchema.find({});
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
};

//
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
  approveUser,
  removeUser,
  collectingPictures,
  deleteUserPicture,
  approveUserPicture,
  galleryCollect,
  createEvent,
  eventCollect,
};
