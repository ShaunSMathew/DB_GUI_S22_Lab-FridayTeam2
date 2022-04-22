const express = require('express');
const rest_owner = require('../models/rest_owner');
const farmer = require('../models/farmer');
const product = require('../models/product');
const router = express.Router();

router.get('/:username', async (req, res, next) => {
    try {
        const farmers = await farmer.findUserByUsername(req.params.username);
        const rest_owners = await rest_owner.findUserByUsername(req.params.username);
        let result;
        if (farmers.length > 0) {
            result = farmers[0];
            result.products = await product.getProductByFarmer(req.params.username);
        }
        if (rest_owners.length > 0) 
            result = rest_owners[0];
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to get profile information:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

router.put('/:username', async (req, res, next) => {
    try {
        const body = req.body;
        const farmers = await farmer.findUserByUsername(req.params.username);
        const rest_owners = await rest_owner.findUserByUsername(req.params.username);
        let result;
        if (farmers.length > 0) {
            result = await farmer.updateProfile(req.params.username, body.street_address, body.city, body.state, body.zip, body.phone_num);
        }
        if (rest_owners.length > 0) 
            result = await rest_owner.updateProfile(req.params.username, body.street_address, body.city, body.state, body.zip, body.phone_num);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to update profile information:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

module.exports = router;