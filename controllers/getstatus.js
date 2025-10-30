const Users = require('../models/User');

const getStatus = async (req, res) => {
  try {
    const { status } = req.params;
    if (status === undefined) return res.status(400).send("Status required");

    const isActive = status === "true";
    const users = await Users.find({ status: isActive });

    if (!users.length) return res.status(404).send("No users found");

    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = getStatus;
