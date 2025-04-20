const mongoose = require("mongoose");
require("dotenv").config();

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    if (!Database.instance) {
      mongoose
        .connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => {
          console.log("✅ MongoDB connected successfully");
        })
        .catch((err) => {
          console.error("❌ MongoDB connection error:", err);
        });

        Database.instance = mongoose.connection;
        
      Database.instance.on("disconnected", () => {
        console.warn("⚠️ MongoDB disconnected. Trying to reconnect...");
        this._connect();
      });

      Database.instance.on("error", (err) => {
        console.error("❌ MongoDB error:", err);
      });
    }
    return Database.instance;
  }

  static getInstance() {
    if (!Database.instance) {
      new Database();
    }
    return Database.instance;
  }

  static async closeConnection() {
    if (Database.instance) {
      await mongoose.connection.close();
      console.log("🚪 MongoDB connection closed");
      Database.instance = null;
    }
  }
}

module.exports = Database;
