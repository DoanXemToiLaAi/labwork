const Video = require("./Video");
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  director: { type: String, required: true },
  releaseDate: { type: Date, required: true },
});

const Movie = Video.discriminator("Movie", movieSchema);
module.exports = Movie;
