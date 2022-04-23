const knex = require('../knex.js');

const PRODUCT_TABLE = 'product';

const getProductByFarmer = async (username) => {
    const query = knex(PRODUCT_TABLE).where('farmer_username', username);
    const result = await query;
    return result;
};

const postProduct = async (name, price, amount) => {
    const query = knex(PRODUCT_TABLE).insert({name, price, amount});
    const result = await query;
    const product = knex(PRODUCT_TABLE).where('id', result);
    return product;
};

const putProduct = async (id, name, price, amount) => {
    const query = knex(PRODUCT_TABLE).where('id', id).update({name, price, amount});
    const result = await query;
    const product = knex(PRODUCT_TABLE).where('id', result);
    return product;
};

const deleteProduct = async (id) => {
    const query = knex(PRODUCT_TABLE).where('id', id).del();
    const result = await query;
    return result;
};

module.exports = {
    getProductByFarmer,
    postProduct,
    putProduct,
    deleteProduct
}