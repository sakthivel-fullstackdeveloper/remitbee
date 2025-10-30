const Users = require('../models/User');

const getAll = async (req, res) => {
  try {
    const users = await Users.find();
    if (!users.length) return res.status(404).send("No users found");

    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = getAll;
