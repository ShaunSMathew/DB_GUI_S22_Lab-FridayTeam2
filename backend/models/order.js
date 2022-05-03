const knex = require('../knex.js');

const ORDER_TABLE = 'order';

const getOrderByUsername = async (username) => {
    const query = knex(ORDER_TABLE).where('farmer_username', username).orWhere('rest_owner_username', username);
    const result = await query;
    return result;
};

const createNewOrder = async (farmer_username, rest_owner_username, product_id, amount, tip) => {
    const query = knex(ORDER_TABLE).insert({ farmer_username, rest_owner_username, product_id, amount, tip });
    console.log('Raw query for createNewOrder:', query.toString());
    const result = await query;
    return result;
};

const changeTip = async (id, tip) => {
    const query = knex(ORDER_TABLE).where('id', id).update({ tip: tip });
    console.log('Raw query for changeTip:', query.toString());
    const result = await query;
    return result;
};

module.exports = {
    getOrderByUsername,
    createNewOrder,
    changeTip
}
