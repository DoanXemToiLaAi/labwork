const User = require("../models/User");
const UserFactory = require("../factories/userFactory");
const { HTTP_STATUS_CODE } = require("../consts/httpStatusCode");

exports.createUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const user = UserFactory.createUser(role, name, email);
    await user.save();

    return res.status(201).json({
      status: HTTP_STATUS_CODE[201],
      message: "User created successfully!",
      data: user,
    });
  } catch (err) {
    return res.status(400).json({
      status: HTTP_STATUS_CODE[400],
      error: err.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    let { page, limit } = req.query;

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;
    const skip = (page - 1) * limit;

    const users = await User.find().skip(skip).limit(limit);
    const totalUsers = await User.countDocuments(); // Lấy tổng số user có trong DB

    if (!users.length) {
      return res.status(204).json({
        status: HTTP_STATUS_CODE[204],
        message: "No users found",
        totalUsers, // Trả về tổng số user có trong DB (dù trang hiện tại không có user)
      });
    }

    return res.status(200).json({
      status: HTTP_STATUS_CODE[200],
      totalUsers, // Số lượng user có trong DB
      page,
      limit,
      currentCount: users.length, // Số lượng user trên trang hiện tại
      data: users,
    });
  } catch (err) {
    return res.status(500).json({
      status: HTTP_STATUS_CODE[500],
      error: err.message,
    });
  }
};
