const express = require('express');
const User = require('../models/users');
const {authenticateJWT} = require('../middleware/auth');

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const accessTokenSecret = 'mysupercoolsecret';
        const result = await User.authenticateUser(body.username, body.password);
        if (employee === null) {
            return employee;
        }
        const accessToken = jwt.sign({ ...employee, claims: ['employee'] }, accessTokenSecret);
        result = accessToken;
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