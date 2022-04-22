const knex = require('../knex.js');

const PRODUCT_TABLE = 'product';

const getProductByFarmer = async (username) => {
    const query = knex(PRODUCT_TABLE).where('farmer_username', username);
    const result = await query;
    return result;
};

module.exports = {
    getProductByFarmer
}