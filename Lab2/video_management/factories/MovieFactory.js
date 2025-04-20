const VideoFactory = require("./VideoFactory");
const Movie = require("../models/Movie");

class MovieFactory extends VideoFactory {
  createVideo(data) {
    return new Movie(data);
  }
}

module.exports = new MovieFactory();
