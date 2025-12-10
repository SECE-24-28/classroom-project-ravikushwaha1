const express = require("express");
const { createUser } = require("../apis-function/user-functions");
const router = express.Router();
router.post("/userSignup", createUser);

module.exports = router;
