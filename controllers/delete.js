const Users = require('../models/User');

const delUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send("User ID required");

    const user = await Users.findById(id);
    if (!user) return res.status(404).send("User not found");

    await Users.findByIdAndDelete(id);
    res.status(200).send(`User ${id} deleted`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = delUser;
