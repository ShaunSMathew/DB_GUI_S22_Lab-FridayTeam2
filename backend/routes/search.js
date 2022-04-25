const farmer = require('../models/farmer');
const rest_owner = require('../models/rest_owner');
const products = require('../models/product');
const router = express.Router();
const express = require('express');

// router.get('/', async (req, res, next) => {
//     try {
//         const user = req.user;
//         const farmer = await farmer.findUserByUsername(user.username);
//         res.status(201).json(farmer);
//     } catch (err) {
//         console.error('Failed to get farmer:', err);
//         res.status(500).json({ message: err.toString() });
//     }
//     next();
// });

router.get('/products', async (req, res, next)=>{ //Allows users to search products by id, name, amount and price 
    try{
        const id = req.query.id;
        const name = req.query.name;
        const amount = req.query.amount;
        const price = req.query.price;
        const results = await products.getProducts(id, name, amount, price);
        res.status(200).json({
            message: 'Products retrieved',
            results: results
        });
   
    } catch (error){
        res.status(500).json({
            message:'Something went wrong with the search query. Please make sure that all query fields are valid and work with the database.'
        });
    }
    next();

});

module.exports = router;