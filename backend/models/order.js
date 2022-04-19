const knex = require('../knex.js');

const ORDER_TABLE = 'order';

const createNewOrder = async (farmer_id, rest_owner_id) => {
    const query = knex(ORDER_TABLE).insert({ farmer_id, rest_owner_id });
    console.log('Raw query for createNewOrder:', query.toString());
    const result = await query;
    result;
    return {farmer_id, rest_owner_id};
};

const findOrderByFarmerID = async (farmer_id) => {
    const query = knex(ORDER_TABLE).where({ farmer_id });
    console.log('Raw query for findOrderByFarmerID:', query.toString());
    const result = await query;
    result;
    return result;
};

const findOrderByRestOwnerID = async (rest_owner_id) => {
    const query = knex(ORDER_TABLE).where({ rest_owner_id });
    console.log('Raw query for findOrderByFarmerID:', query.toString());
    const result = await query;
    result;
    return result;
};

const findAllOrder = async () => {
    const query = knex(ORDER_TABLE);
    console.log('Raw query for findAllOrder:', query.toString());
    const result = await query;
    result;
    return result;
};

const findOrderByBothID = async (farmer_id, rest_owner_id) => {
    const query = knex(ORDER_TABLE).where({ farmer_id, rest_owner_id});
    console.log('Raw query for findOrderByBothID:', query.toString());
    const result = await query;
    result;
    return result;
};

module.exports = {
    createNewOrder,
    findAllOrder,
    findOrderByBothID,
    findOrderByFarmerID,
    findOrderByRestOwnerID
};