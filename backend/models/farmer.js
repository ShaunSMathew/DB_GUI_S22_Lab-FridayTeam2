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

module.exports = {
    createNewFarmer,
    findUserByUsername,
    updateProfile
};