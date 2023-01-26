const { sign } = require("jsonwebtoken");
const { user: userModel } = require("../models");
require("dotenv").config();

/**
 * Forge JWT for the user and send it back to the client
 */
async function getToken(req, res) {
  const { userId } = req.body;
  const user = await userModel.find(userId);

  if (!user) {
    res.status(401).json({ error: "User not found" });
    return;
  }

  const token = sign(
    { firstname: user.firstname, lastname: user.lastname, id: user.id },
    process.env.JWT_SECRET
  );

  res.json({ token });
}

module.exports = { getToken };
