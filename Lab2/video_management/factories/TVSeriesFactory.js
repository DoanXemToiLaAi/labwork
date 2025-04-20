const VideoFactory = require("./VideoFactory");
const TvSeries = require("../models/TVSeries");

class TvSeriesFactory extends VideoFactory {
  createVideo(data) {
    return new TvSeries(data);
  }
}

module.exports = new TvSeriesFactory();
