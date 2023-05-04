const User = require('./userSchema.js');

const createUser = async (req, res) => {
  try {
    console.log(req.body);

    // Get the user data from the request body
    const userData = req.body;

    // Create a new user using the User model
    const newUser = new User(userData);

    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).send(savedUser);
    console.log('user is saved');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
};
const loginUser = async (req, res) => {
  try {
    console.log(req.body);

    // Get the user data from the request body
    const userLog = req.body;

    // Create a new user using the User model
    const user = await User.findOne({
      email: userLog.email,
      password: userLog.password,
    });
    if (user.email === 'admin@cubscout.com' && user.password === 'admin123') {
      console.log('admin found');

      res.status(200).json({
        admin: true,
        authenticated: true,
      });
    } else {
      console.log('User found');
      res.status(200).json({
        authenticated: true,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(404).send('Error finding user');
  }
};

module.exports = {
  createUser,
  loginUser,
};
