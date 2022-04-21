const express = require('express');
const User = require('../models/users');
const {authenticateJWT} = require('../middleware/auth');

const router = express.Router();
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