const express = require('express');
const farmer = require('../models/farmer');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const user = req.user;
        const farmer = await farmer.findUserByUsername(user.username);
        res.status(201).json(farmer);
    } catch (err) {
        console.error('Failed to get farmer:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.post('/product', async (req, res, next) => {
    try {
        const user = req.user;
        const body = req.body;
        console.log(body);
        const farmer = await farmer.findUserByUsername(user.username);
        result = await order.createNewOrder(body.name, body.price, body.amount, farmer.id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new product:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});


router.put('/address', async(req, res, next)=>{ //Change a farmer's address
    try{
        const info = req.body;
        const user = req.body.user;
       // const id = req.user.id;
        console.log("Making changes to address of farmer  with id: ", user.toString());
        const result = await farmer.changeAddress(info, user);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Failed to edit address: ", err);
        res.status(400).json({message:err.toString()});
    }

    next();

});
router.delete('/address', async(req, res, next)=>{ //delete a farmer's address
    try{
        const user = req.body.user;
        // const info = req.body;
        const id = req.user.id;
        console.log("Deleting address of farmer with id: ". user.toString());
        const result = await farmer.deleteAddress( user);
        res.status(200).json(result);
    }
    catch(err){
        console.error('Failed to delete address for farmer with id: ', user.toString());
        res.status(400).json({message:err.toString()});
    }
    next();

});

module.exports = router;