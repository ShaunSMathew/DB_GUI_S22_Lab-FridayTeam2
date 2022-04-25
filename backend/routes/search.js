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

router.get('/products', async (req, res, next)=>{ //Allows users to search products by product id, name, amount and price 
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

router.get('/productByFarmer', async(req, res, next)=>{ //Accepts a farmer's username to return all products posted by that farmer
    try{
        const farmerName = req.query.username;
        const results = await products.getProductByFarmer(farmerName);
        res.status(200).json({
            message: 'Products retrieved',
            results: results
        });
    }
    catch(error){
        res.status(500).json({
            message:'Something went wrong. Please make sure that the farmer username is correct.'
        });
    }
    next();
});

router.get('/searchFarmersByLocation', async(req, res, next)=>{
    try{
        const street = req.query.street_address;
        const city = req.query.city;
        const state = req.query.state;
        const zip = req.query.zip;
        const results = await farmer.searchFarmerByLocation(street, city, state, zip);

        res.status(200).json({
            message: 'Products retrieved by location search: ',
            results: results
        });
    }
    catch(error){
        res.status(500).json({
            message:'Something went wrong. Please make sure that the location parameters are correct.'
        });
    }
    next();
})

module.exports = router;