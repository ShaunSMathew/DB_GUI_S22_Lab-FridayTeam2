const express = require('express');
const order = require('../models/order');
const product = require('../models/product');
const router = express.Router();
router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const user = req.user;
        const update = await product.updateAmount(body.product_id, body.amount);//update amount
        if(update == "err"){
            res.status(500).json("amount not enough");
        }else{
            const result = await order.createNewOrder(body.farmer_username, user.username, body.product_id, body.amount, body.tip);
            res.status(201).json(result);
        }
    } catch (err) {
        console.error('Failed to create new order:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

module.exports = router;
