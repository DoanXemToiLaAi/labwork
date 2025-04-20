require("dotenv").config();
const express = require("express");
const Database = require("./dbs/database");
const studentRoutes = require("./routes/student.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Kết nối database
Database.getInstance();

app.use(express.json());

app.use("/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("🎉 Server is running!");
});

process.on("SIGINT", async () => {
  await Database.closeConnection();
  console.log("🛑 Server stopped");
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
