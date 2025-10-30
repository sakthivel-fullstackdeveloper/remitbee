const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  status: { type: Boolean, default: true },
  salary: { type: Number, required: true },
  pendingSalary: { type: Number, default: 0 }
});

const Users = mongoose.model('User', userSchema);
module.exports = Users;
