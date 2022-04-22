const express = require('express');
const farmer = require('../models/farmer');
const rest_owner = require('../models/rest_owner');
const order = require('../models/order');
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const user = req.user;
        const body = req.body;
        console.log(body);
        const farmer = await farmer.findUserByUsername(user.username);
        const rest_owner = await rest_owner.findUserByUsername(user.username);
        farmer;
        rest_owner;
        result = await order.createNewOrder(farmer.id, rest_owner.id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new product:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

// GET /order?farmer=[farmer_id]&rest_owner=[rest_owner_id]
router.get('/', async (req, res, next) => {
    try {
        const farmerQuery = req.query.farmer;
        const rest_ownerQuery = req.query.rest_owner;
        var result;
        if (rest_ownerQuery === undefined && farmerQuery === undefined) {
            result = await order.findAllOrder();
        }else if(!(rest_ownerQuery) === undefined && !(farmerQuery === undefined)){
            result = await order.findOrderByBothID(farmerQuery, rest_ownerQuery);
        }else if(!(rest_ownerQuery === undefined)){
            result = await order.findOrderByRestOwnerID(rest_ownerQuery);
        }else{
            result = await order.findOrderByFarmerID(farmerQuery);
        }
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new product:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
module.exports = router;