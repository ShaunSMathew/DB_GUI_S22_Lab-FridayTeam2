const express = require('express');
const user = require('../models/users');
const farmer = require('../models/farmer');
const rest_owner = require('../models/rest_owner');
const router = express.Router();

// create new farmer or owner account
router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        await user.createNewUser(body.username, body.password);
        let result;
        if(body.user_type == 'farmer')
            result = farmer.createNewFarmer(body.username);
        else
            result = rest_owner.createNewOwner(body.username);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new user:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

module.exports = router;