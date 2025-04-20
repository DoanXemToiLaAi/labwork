const Video = require("../models/Video");
const ShortVideo = require("../models/ShortVideo");
const TVSeries = require("../models/TVSeries");
const Movie = require("../models/Movie");
const { HTTP_STATUS_CODE } = require("../const/httpStatusCode");

class VideoService {
  static async getAllVideos() {
    return await Video.find();
  }

  static async getVideoById(id) {
    const video = await Video.findById(id);
    if (!video) {
      throw { status: 404, message: HTTP_STATUS_CODE[404] };
    }
    return video;
  }

  static async createVideo(data) {
    try {
      let newVideo;

      switch (data.type) {
        case "ShortVideo":
          newVideo = await ShortVideo.create(data);
          break;
        case "TVSeries":
          newVideo = await TVSeries.create(data);
          break;
        case "Movie":
          newVideo = await Movie.create(data);
          break;
        default:
          throw { status: 400, message: "Invalid video type!" };
      }

      return newVideo;
    } catch (error) {
      throw { status: 400, message: error.message || "Bad Request" };
    }
  }

  static async updateVideo(id, updateData) {
    const video = await Video.findByIdAndUpdate(id, updateData, { new: true });
    if (!video) {
      throw { status: 404, message: HTTP_STATUS_CODE[404] };
    }
    return video;
  }

  static async deleteVideo(id) {
    const video = await Video.findByIdAndDelete(id);
    if (!video) {
      throw { status: 404, message: HTTP_STATUS_CODE[404] };
    }
    return { message: "Deleted successfully" };
  }
}

module.exports = VideoService;
