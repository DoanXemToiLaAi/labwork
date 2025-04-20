const VideoFactory = require("./VideoFactory");
const ShortVideo = require("../models/ShortVideo");

class ShortVideoFactory extends VideoFactory {
  createVideo(data) {
    return new ShortVideo(data);
  }
}

module.exports = new ShortVideoFactory();
