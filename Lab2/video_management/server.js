const express = require("express");
const connectDB = require("./config/db");
const videoRoutes = require("./routes/VideoRoutes");

const app = express();
const PORT = process.env.PORT || 1111;

// Middleware
app.use(express.json());

// Kết nối MongoDB
connectDB();

// Routes
app.use("/api/v1/", videoRoutes);

// Chạy server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
