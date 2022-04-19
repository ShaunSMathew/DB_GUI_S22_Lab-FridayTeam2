const knex = require('../knex.js');

const REST_PRODUCT_TABLE = 'product';

const createNewProduct = async (name, price, amount, farmer_id ) => {
    const query = knex(REST_PRODUCT_TABLE).insert({ name, price, amount, farmer_id });
    console.log('Raw query for createNewProduct:', query.toString());
    const result = await query;
    result;
    return {name, price, amount};
};

const findProductByName = async (name) => {
    const query = knex(REST_PRODUCT_TABLE).where({ name });
    const result = await query;
    return result;
};

module.exports = {
    createNewProduct,
    findProductByName
};