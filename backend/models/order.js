const knex = require('../knex.js');

const ORDER_TABLE = 'order';

const createNewOrder = async (farmer_id, rest_owner_id) => {

    const query = knex(ORDER_TABLE).insert({ farmer_id, rest_owner_id });
    console.log('Raw query for createNewOrder:', query.toString());
    const result = await query;
    result;
    return {farmer_id, rest_owner_id};
};

module.exports = {
    createNewOrder,
};