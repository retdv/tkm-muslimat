const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  id: String,
  password: String,
  refresh_token: String,
});

module.exports = mongoose.model("User", UserSchema);
