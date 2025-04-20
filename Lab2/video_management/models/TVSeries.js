const mongoose = require("mongoose");
const Video = require("./Video");

const TVSeriesSchema = new mongoose.Schema({
  seasons: { type: Number, required: true },
  episodes: { type: Number, required: true },
  duration: { type: Number, required: true }, 
});

const TVSeries = Video.discriminator("TVSeries", TVSeriesSchema);
module.exports = TVSeries;
