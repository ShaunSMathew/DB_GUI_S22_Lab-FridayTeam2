const express = require('express');
const review = require('../models/review');
const farmer = require('../models/farmer');
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const user = req.user;
        const farmer = await farmer.findUserByUsername(user.username);
        const result = await review.createNewReview(body.text, body.farmer_username);//create review
        const updateNum = await farmer.addNumRatings(farmer.id);
        const updateSum = await farmer.addSumRatings(farmer.id, body.rating);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new review:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

module.exports = router;
