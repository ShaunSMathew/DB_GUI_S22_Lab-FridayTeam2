const express = require('express');
const farmer = require('../models/farmer');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const user = req.user;
        const farmer = await farmer.findUserByUsername(user.username);
        res.status(201).json(farmer);
    } catch (err) {
        console.error('Failed to get farmer:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.post('/product', async (req, res, next) => {
    try {
        const user = req.user;
        const body = req.body;
        console.log(body);
        const farmer = await farmer.findUserByUsername(user.username);
        result = await order.createNewOrder(body.name, body.price, body.amount, farmer.id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new product:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});


module.exports = router;