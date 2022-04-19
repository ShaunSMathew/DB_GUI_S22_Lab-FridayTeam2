const express = require('express');
const rest_owner = require('../models/rest_owner');
const router = express.Router();
const order = require('../models/order');


router.get('/', async (req, res, next) => {
    try {
        const user = req.user;
        const rest_owner = await rest_owner.findUserByUsername(user.username);
        res.status(201).json(rest_owner);
    } catch (err) {
        console.error('Failed to get rest_owner:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.post('/order', async (req, res, next) => {
    try {
        const user = req.user;
        const body = req.body;
        console.log(body);
        const rest_owner = await rest_owner.findUserByUsername(user.username);
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