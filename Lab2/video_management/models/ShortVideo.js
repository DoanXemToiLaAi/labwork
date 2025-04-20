const Video = require("./Video");
const mongoose = require("mongoose");

const ShortVideoSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  releaseDate: { type: Date, required: true }, // Đã thêm releaseDate để tránh thiếu trong response
});

const ShortVideo = Video.discriminator("ShortVideo", ShortVideoSchema);
module.exports = ShortVideo;
