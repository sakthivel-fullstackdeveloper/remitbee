const Users = require('../models/User');

const updateSal = async (req, res) => {
  try {
    const { id } = req.params;
    const { paid } = req.body;

    if (!paid ) {
      return res.status(400).send("Enter a valid amount");
    }

    const user = await Users.findById(id);
    if (!user) return res.status(404).send("User not found");

    if (user.pendingSalary <= 0)
      return res.status(200).send("Salary already cleared");

    let remain = user.pendingSalary - Number(paid);
    if (remain < 0) remain = 0;

    await Users.findByIdAndUpdate(id, { pendingSalary: remain });

    if (remain === 0)
      return res.status(201).send("Salary fully paid");
    else
      return res.status(200).send(`Pending salary: ₹${remain}`);
      
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = updateSal;
