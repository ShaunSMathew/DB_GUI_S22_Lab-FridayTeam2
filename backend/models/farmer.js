const knex = require('../knex.js');

const FARMER_TABLE = 'farmer';

const createNewFarmer = async (username) => {

    const query = knex(FARMER_TABLE).insert({ username });
    console.log('Raw query for createNewUser:', query.toString());
    const result = await query;

    return result;
};

const findUserByUsername = async (username) => {
    const query = knex(FARMER_TABLE).where({ username });
    const result = await query;
    return result;
};

const updateProfile = async (username, street_address, city, state, zip, phone_num) => {
    const query = await knex(FARMER_TABLE).where({ username }).update({
        street_address, city, state, zip, phone_num
    });
    const result = await knex(FARMER_TABLE).where({ username });
    return result;
}


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

const addNumRatings = async(farmerId) =>{
    const qurey = knex(FARMER_TABLE).where({id : farmerId}).update({num_of_ratings: (num_of_ratings+1)}); 
    const result = await qurey;
    return result;
}

const addSumRatings = async(farmerId, rating) =>{
    const qurey = knex(FARMER_TABLE).where({id : farmerId}).update({ratings_sum: (ratings_sum+rating)}); 
    const result = await qurey;
    return result;
}
module.exports = {
    createNewFarmer,
    findUserByUsername,
    changeAddress,
    deleteAddress,
    updateProfile,
    addNumRatings,
    addSumRatings
};