const knex = require('../knex.js');

const FARMER_TABLE = 'farmer';

const createNewFarmer = async (username, address, phone_num, profile_pic) => {

    const query = knex(FARMER_TABLE).insert({ username, address, phone_num, profile_pic });
    console.log('Raw query for createNewUser:', query.toString());
    const result = await query;

    return result;
};

const findUserByUsername = async (username) => {
    const query = knex(FARMER_TABLE).where({ username });
    const result = await query;
    return result;
};

const changeAddress = async (body, farmerId) => {
    const newAddress = body.address;

    const changeAddy = knex(FARMER_TABLE).where({id : farmerId}).update({address:newAddress});
    console.log(`Raw query for changeAddress: `, changeAddy.toString());
    const result = await changeAddy;
    return result;
};

const deleteAddress = async(body, farmerId) =>{
    const address = knex(FARMER_TABLE).where({id : farmerId}).update({address: " "}); 
    //Not sure if this is how to do this-- don't actually want to delete anything from database
    const result = await address;
    return result;
}
module.exports = {
    createNewFarmer,
    findUserByUsername,
    changeAddress,
    deleteAddress
};