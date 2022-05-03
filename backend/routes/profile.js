const express = require('express');
const rest_owner = require('../models/rest_owner');
const farmer = require('../models/farmer');
const product = require('../models/product');
const review = require('../models/review');
const order = require('../models/order');
const schedule = require('../models/schedule');
const router = express.Router();

router.get('/:username', async (req, res, next) => {
    try {
        const farmers = await farmer.findUserByUsername(req.params.username);
        const rest_owners = await rest_owner.findUserByUsername(req.params.username);
        let result;
        if (farmers.length > 0) {
            result = farmers[0];
            result.products = await product.getProductByFarmer(req.params.username);
            result.reviews = await review.getReviewByFarmer(req.params.username);
            result.schedule = await schedule.getScheduleByFarmer(req.params.username);
        }
        if (rest_owners.length > 0) {
            result = rest_owners[0];
        }
        if (result.num_of_ratings > 0) {
            result.average_rating = result.ratings_sum / result.num_of_ratings;
        }
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to get profile information:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

router.get('/:username/products', async (req, res, next) => {
    try {
        const query = await product.getProductByFarmer(req.params.username);
        const result = await query;
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to get products:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

router.get('/:username/reviews', async (req, res, next) => {
    try {
        const query = await review.getReviewByFarmer(req.params.username);
        const result = await query;
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to get reviews:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

router.get('/:username/schedule', async (req, res, next) => {
    try {
        const query = await schedule.getScheduleByFarmer(req.params.username);
        const result = await query;
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to get schedule:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

router.get('/:username/orders', async (req, res, next) => {
    try {
        const query = await order.getOrderByUsername(req.params.username);
        const result = await query;
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to get order history:', err);
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
            result = await farmer.updateProfile(req.params.username, body.street_address, body.city, body.state, body.zip, body.phone_num, body.profile_pic);
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

router.post("/:username/product", async (req, res, next) => {
  try {
      const body = req.body;
      const username = req.params.username;
      const result = await product.postProduct(body.name, body.price, body.amount, username);
      res.status(201).json(result);
  } catch (err) {
    console.error("Failed to post product:", err);
    res.status(500).json({ message: err.toString() });
  }

  next();
});

router.put("/:username/product/:id", async (req, res, next) => {
  try {
    const body = req.body;
    const result = await product.putProduct(req.params.id, body.name, body.price, body.amount, body.description, body.picture);
    res.status(201).json(result);
  } catch (err) {
    console.error("Failed to edit product:", err);
    res.status(500).json({ message: err.toString() });
  }

  next();
});

router.delete('/:username/product/:id', async (req, res, next) => {
    try {
        const body = req.body;
        const result = await product.deleteProduct(req.params.id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to delete product:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

router.post('/:username/schedule', async (req, res, next) => {
    try {
        const body = req.body;
        const result = await schedule.postEntry(body.date, body.time, body.entry, req.params.username);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to post product:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

router.put('/:username/schedule/:id', async (req, res, next) => {
    try {
        const body = req.body;
        const result = await schedule.putEntry(req.params.id, body.date, body.time, body.entry);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to edit product:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

router.delete('/:username/schedule/:id', async (req, res, next) => {
    try {
        const body = req.body;
        const result = await schedule.deleteEntry(req.params.id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to delete product:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

router.delete('/:username/profilePicture', async (req, res, next) => {
    try {
        const body = req.body;
        const farmers = await farmer.findUserByUsername(req.params.username);
        const rest_owners = await rest_owner.findUserByUsername(req.params.username);
        let result;
        if (farmers.length > 0) {
            result = await farmer.deletePicture(req.params.username);
        }
        if (rest_owners.length > 0)
          result = await rest_owner.deletePicture(req.params.username);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to delete profile picture:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

module.exports = router;
