const express = require('express');
const user = require('../models/users');
const farmer = require('../models/farmer');
const rest_owner = require('../models/rest_owner');
const router = express.Router();

// create new farmer account
router.post('/farmer', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        await user.createNewUser(body.username, body.password);
        const result = farmer.createNewFarmer(body.username, body.address, body.phone_num, body.profile_pic);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new user:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

// create new rest_owner account
router.post('/owner', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        await user.createNewUser(body.username, body.password);
        const result = rest_owner.createNewOwner(body.username, body.address, body.phone_num, body.profile_pic);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new user:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

module.exports = router;