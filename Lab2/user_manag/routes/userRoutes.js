const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

const GET_USERS = "/";
const POST_USERS = "/";

router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);

module.exports = router;
