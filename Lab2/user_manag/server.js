const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();

// Kết nối database
connectDB();

// Middleware xử lý body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Khởi tạo routes
app.use("/api/v1/", userRoutes);

// Khởi chạy server
const PORT = process.env.PORT || 6666;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
