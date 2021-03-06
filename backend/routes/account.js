const express = require('express');
const user = require('../models/users');
const farmer = require('../models/farmer');
const rest_owner = require('../models/rest_owner');
const jwt = require("jsonwebtoken");
const router = express.Router();

// create new farmer or owner account
router.post("/", async (req, res, next) => {
  try {
    const body = req.body;
    const accessTokenSecret = "mysupercoolsecret";
    let accessToken;
    console.log(body);
    if (!body.username) throw "No username entered";
    if (body.password.length < 9) throw "Password must be longer than 8 digits";
    const users = await user.findUserByUsername(body.username);
    if (users.length > 0) throw "Username already taken";

    await user.createNewUser(body.username, body.password);
    if (body.user_type == "farmer") {
      await farmer.createNewFarmer(body.username);
      const farmers = await farmer.findUserByUsername(body.username);
      accessToken = jwt.sign({ ...farmers[0], claims: ["farmer"] }, accessTokenSecret);
    } else {
      await rest_owner.createNewOwner(body.username);
      const rest_owners = await rest_owner.findUserByUsername(body.username);
      accessToken = jwt.sign({ ...rest_owners[0], claims: ["owner"] }, accessTokenSecret);
    }
    let result = accessToken;
    res.status(201).json(result);
  } catch (err) {
    console.error("Failed to create new user:", err);
    res.status(500).json({ message: err.toString() });
  }

  next();
});

module.exports = router;
