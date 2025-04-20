const mongoose = require("mongoose");
require("dotenv").config();

const { MongoDB_URI } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(MongoDB_URI, {});
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
