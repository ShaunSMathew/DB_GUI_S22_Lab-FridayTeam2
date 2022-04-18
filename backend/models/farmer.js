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

module.exports = {
    createNewFarmer,
    findUserByUsername
};