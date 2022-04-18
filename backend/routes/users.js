const express = require('express');
const user = require('../models/users');
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await user.createNewUser(body.username, body.password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new user:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

module.exports = router;