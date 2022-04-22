const express = require('express');
const rest_owner = require('../models/rest_owner');
const router = express.Router();
const order = require('../models/order');


router.get('/', async (req, res, next) => {
    try {
        const user = req.user;
        const rest_owner = await rest_owner.findUserByUsername(user.username);
        res.status(201).json(rest_owner);
    } catch (err) {
        console.error('Failed to get rest_owner:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});


router.put('/address', async(req, res, next)=>{ //Change a rest_owner's address
    try{
        const info = req.body;
        const user = req.body.username;
        //const id = req.user.id;
        console.log("Making changes to address of rest_owner with username: ", user.toString());
        const result = await rest_owner.changeAddress(info, user);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Failed to edit address: ", err);
        res.status(400).json({message:err.toString()});
    }

    next();

});
router.delete('/address', async(req, res, next)=>{
    try{
        const user = req.body.user;
        // const info = req.body;
        //const id = req.user.id;
        console.log("Deleting address of rest_owner with username: ". user.toString());
        const result = await rest_owner.deleteAddress( user);
        res.status(200).json(result);
    }
    catch(err){
        console.error('Failed to delete address for rest_owner with id: ', user.toString());
        res.status(400).json({message:err.toString()});
    }
    next();

});

module.exports = router;