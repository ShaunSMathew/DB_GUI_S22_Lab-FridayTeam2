const express = require('express');
const farmer = require('../models/farmer');
const rest_owner = require('../models/rest_owner');
const products = require('../models/product');
const router = express.Router();


router.get("/products", async (req, res, next) => {
  //Allows users to search products by product id, name, amount and price
  try {
    const id = req.id;
    const name = req.name;
    const amount = req.amount;
    const price = req.price;
    const results = await products.getProducts(id, name, amount, price);
    res.status(200).json({
      message: "Products retrieved",
      results: results,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong with the search query. Please make sure that all query fields are valid and work with the database.",
    });
  }
  next();
});

router.get("/productByFarmer", async (req, res, next) => {
  //Accepts a farmer's username to return all products posted by that farmer
  try {
    const farmerName = req.username;
    const results = await products.getProductByFarmer(farmerName);
    res.status(200).json({
      message: "Products retrieved",
      results: results,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please make sure that the farmer username is correct.",
    });
  }
  next();
});

router.get("/productByTag", async (req, res, next) => {
  //Accepts a hashtag and returns all products associated with that hashtag
  try {
    const hashtag = req.hashtag;
    const results = await products.getProductByTag(hashtag);
    res.status(200).json({
      message: "Products retrieved",
      results: results,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Try a different tag",
    });
  }
  next();
});

router.get("/farmersByLocation", async (req, res, next) => {
  //Accepts a street_address, city, state, and zip and returns all farmers with the included information. Can be a full set of parameters or at least one
  try {
    const street = req.street_address;
    const city = req.city;
    const state = req.state;
    const zip = req.zip;
    const results = await farmer.searchFarmerByLocation(street, city, state, zip);

    res.status(200).json({
      message: "Products retrieved by location search: ",
      results: results,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please make sure that the location parameters are correct.",
    });
  }
  next();
});



module.exports = router;
