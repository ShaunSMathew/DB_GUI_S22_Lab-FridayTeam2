const express = require('express');
const farmer = require('../models/farmer');
const rest_owner = require('../models/rest_owner');
const saved = require('../models/saved');
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const user = req.user;
        if(update == "err"){
            res.status(500).json("amount not enough");
        }else{
            const result = await saved.createNewOrder(body.farmer_username, user.username, body.product_id, body.amount, body.tip);
            res.status(201).json(body);
        }
    } catch (err) {
        console.error('Failed to create new saved:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await saved.getSavedByUsername(user.username);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to get saved:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
module.exports = router;
