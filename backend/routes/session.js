const express = require('express');
const User = require('../models/users');
const farmer = require('../models/farmer');
const rest_owner = require('../models/rest_owner');
const {authenticateJWT} = require('../middleware/auth');
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const user = await User.authenticateUser(body.username, body.password);
        let result;
        if (user === null) {
            throw "Username or password is incorrect";
        } else {
            const accessTokenSecret = 'mysupercoolsecret';
            let accessToken;
            const farmers = await farmer.findUserByUsername(body.username);
            const rest_owners = await rest_owner.findUserByUsername(body.username);
            if (farmers.length == 0) {
                accessToken = jwt.sign({ ...rest_owners[0], claims: ['owner'] }, accessTokenSecret);
            } else
                accessToken = jwt.sign({ ...farmers[0], claims: ['farmer'] }, accessTokenSecret);
            result = accessToken;
        }
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to authenticate user:', err);
        res.status(401).json({ message: err.toString() });
    }

    next();
});

router.get('/', authenticateJWT, async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.findUserByUsername(user.username);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }

    next();
});

module.exports = router;
