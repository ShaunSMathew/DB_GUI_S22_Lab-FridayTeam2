const knex = require('../knex.js');

const SAVED_TABLE = 'saved';

const getSavedByUsername = async (username) => {
    const query = knex(SAVED_TABLE).where('farmer_username', username).orWhere('rest_owner_username', username);
    const result = await query;
    return result;
};

const createNewSaved = async (farmer_username, rest_owner_username, product_id, amount, tip) => {
    const query = knex(SAVED_TABLE).insert({ farmer_username, rest_owner_username, product_id, amount, tip });
    console.log('Raw query for createNewSaved:', query.toString());
    const result = await query;

    return result;
};

module.exports = {
    getSavedByUsername,
    createNewSaved
}
