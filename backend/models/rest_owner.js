const knex = require('../knex.js');

const REST_OWNER_TABLE = 'rest_owner';

const createNewOwner = async (username, address, phone_num, profile_pic) => {

    const query = knex(REST_OWNER_TABLE).insert({ username, address, phone_num, profile_pic });
    console.log('Raw query for createNewUser:', query.toString());
    const result = await query;
    result;
    return {username, address, phone_num, profile_pic};
};

const findUserByUsername = async (username) => {
    const query = knex(REST_OWNER_TABLE).where({ username });
    const result = await query;
    return result;
};

module.exports = {
    createNewOwner,
    findUserByUsername
};