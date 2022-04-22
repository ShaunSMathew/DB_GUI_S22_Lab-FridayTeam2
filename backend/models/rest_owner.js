const knex = require('../knex.js');

const REST_OWNER_TABLE = 'rest_owner';

const createNewOwner = async (username) => {

    const query = knex(REST_OWNER_TABLE).insert({ username });
    console.log('Raw query for createNewUser:', query.toString());
    const result = await query;

    return result;
};

const findUserByUsername = async (username) => {
    const query = knex(REST_OWNER_TABLE).where({ username });
    const result = await query;
    return result;
};

const updateProfile = async (username, street_address, city, state, zip, phone_num) => {
    const query = await knex(REST_OWNER_TABLE).where({ username }).update({
        street_address, city, state, zip, phone_num
    });
    const result = await knex(REST_OWNER_TABLE).where({ username });
    return result;
}

module.exports = {
    createNewOwner,
    findUserByUsername,
    updateProfile
};