const knex = require('../knex.js');

const ORDER_TABLE = 'order';

const getOrderByUsername = async (username) => {
    const query = knex(ORDER_TABLE).where('farmer_username', username).orWhere('rest_owner_username', username);
    const result = await query;
    return result;
};

module.exports = {
    getOrderByUsername
}