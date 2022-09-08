const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  login: {
    type: String,
    trim: true,
    required: [true, "Login must be provided"],
    minlength: [6, "Login must be more 6 symbols"]
  },
  password: {
    type: String,
    trim: true,
    required: [true, "Password must be provided"],
    minlength: [8, "Password must be more 8 symbols"]
  }
});

module.exports = mongoose.model("User", UserSchema);
