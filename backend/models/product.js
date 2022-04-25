const knex = require('../knex.js');

const PRODUCT_TABLE = 'product';

const createNewProduct = async (name, price, amount, username) => {
    const query = knex(PRODUCT_TABLE).where('farmer_username', username).update({
        name, price, amount
    });
    const result = await query;
    return result;
};
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
    const query1 = knex(PRODUCT_TABLE).where({ id });
    const product = await query1;
    const amount = product[0].amount - order_amount;
    if(amount < 0){
        console.log("err: amount not enough");
        return "err";
    }else{
        console.log('amount:',amount);
        const query = knex(PRODUCT_TABLE).where({ id }).update({ amount : amount });
        const result = await query;
        return result;
    }
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
    createNewProduct,
    getProductByFarmer,
    findProductByID,
    updateAmount,
    updateProductReview
}