const mongoose = require("mongoose");

const user = new mongoose.Schema({
  user_name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("USERs", user);
