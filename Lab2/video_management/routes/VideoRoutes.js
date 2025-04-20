const express = require("express");
const VideoController = require("../controllers/VideoController");

const router = express.Router();

// Định nghĩa các route
router.get("/videos", VideoController.getAllVideos);
router.get("/videos/:id", VideoController.getVideoById);
router.post("/videos", VideoController.createVideo);
router.put("/videos/:id", VideoController.updateVideo);
router.delete("/videos/:id", VideoController.deleteVideo);

module.exports = router;
