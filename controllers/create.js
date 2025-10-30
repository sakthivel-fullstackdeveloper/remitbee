const Users = require('../models/User');

const create = async (req, res) => {
  try {
    const { name, position, status, salary, pendingSalary } = req.body;

    const user = new Users({ name, position, status, salary, pendingSalary });
    await user.save();

    res.status(201).json(user);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).send("Please fill all required fields");
    }
    console.error(err);
    res.status(500).send("Server error while creating user");
  }
};

module.exports = create;
