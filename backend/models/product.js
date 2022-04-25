const knex = require('../knex.js');

const PRODUCT_TABLE = 'product';

const getProductByFarmer = async (username) => {
    const query = knex(PRODUCT_TABLE).where('farmer_username', username);
    const result = await query;
    return result;
};
const findProductByID = async (id) => {
    const query = knex(PRODUCT_TABLE).where({ id : id });
    const result = await query;
    return result;
};
const updateAmount = async (id, order_amount) => {
    const query = knex(PRODUCT_TABLE).where({ id }).update({ amount : (amount - order_amount) });
    const result = await query;
    return result;
};
const updateProductReview = async (id, like_or_dislike ) => {
    if(like_or_dislike == "like"){
        const query = knex(PRODUCT_TABLE).where({ id }).update({ like : (like+1) });
    }else if(like_or_dislike == "dislike"){
        const query = knex(PRODUCT_TABLE).where({ id }).update({ dislike : (dislike+1) });
    }
    const result = await query;
    return result;
};

module.exports = {
    getProductByFarmer,
    findProductByID,
    updateAmount,
    updateProductReview
}