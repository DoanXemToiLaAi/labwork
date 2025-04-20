const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    duration: { type: Number, required: true }, // Đơn vị: phút
    category: { type: String, required: true },
  },
  { discriminatorKey: "type", timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);
module.exports = Video;
