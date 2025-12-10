const User = require("../models/user");
exports.createUser = async (req, res) => {
  try {
    const creatUser = await User.insertOne({
      firstName: "krish",
      lastName: "Eshwar",
      email: "random@gmail.com",
    });
    return res.status(200).json({
      success: true,
      message: "User is created successfully",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};
