const express = require('express');
const product = require('../models/product');
const rest_owner = require('../models/rest_owner');
const order = require('../models/order');
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const user = req.user;
        const rest_owner = await rest_owner.findUserByUsername(user.username);
        const product = await product.findProductByID(body.product_id);
        if(product.amount < body.amount){
            const err = { message: "amount not enough" };
            throw err;
        }
        const update = await product.updateAmount(body.amount);
        const result = await order.createNewOrder(body.farmer_username, rest_owner.username, body.product_id, body.amount, body.tip);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new order:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

module.exports = router;
