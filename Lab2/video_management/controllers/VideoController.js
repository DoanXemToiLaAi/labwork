const VideoService = require("../services/VideoService");

class VideoController {
  static async getAllVideos(req, res) {
    try {
      const videos = await VideoService.getAllVideos();
      res.status(200).json(videos);
    } catch (error) {
      res
        .status(error.status || 500)
        .json({ message: error.message || "Internal Server Error" });
    }
  }

  static async getVideoById(req, res) {
    try {
      const video = await VideoService.getVideoById(req.params.id);
      res.status(200).json(video);
    } catch (error) {
      res
        .status(error.status || 500)
        .json({ message: error.message || "Internal Server Error" });
    }
  }

  static async createVideo(req, res) {
    try {
      const video = await VideoService.createVideo(req.body);
      res.status(201).json(video);
    } catch (error) {
      res
        .status(error.status || 500)
        .json({ message: error.message || "Internal Server Error" });
    }
  }

  static async updateVideo(req, res) {
    try {
      const video = await VideoService.updateVideo(req.params.id, req.body);
      res.status(200).json(video);
    } catch (error) {
      res
        .status(error.status || 500)
        .json({ message: error.message || "Internal Server Error" });
    }
  }

  static async deleteVideo(req, res) {
    try {
      const response = await VideoService.deleteVideo(req.params.id);
      res.status(200).json(response);
    } catch (error) {
      res
        .status(error.status || 500)
        .json({ message: error.message || "Internal Server Error" });
    }
  }
}

module.exports = VideoController;
