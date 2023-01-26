const { user: userModel } = require("../models");

async function getAllUsers(req, res) {
  const users = await userModel.findAll();
  res.json(users);
}

module.exports = { getAllUsers };
