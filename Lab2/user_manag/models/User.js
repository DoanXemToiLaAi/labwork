const mongoose = require("mongoose");
const { roles } = require("../consts");
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: [roles.ADMIN, roles.USER, roles.GUEST],
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
