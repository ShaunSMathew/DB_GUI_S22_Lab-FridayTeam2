const knex = require('../knex.js');

const PRODUCT_TABLE = 'product';

const getProductByFarmer = async (username) => { //Returns a list of all products listed with that farmer's username
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

const getProductById = async(id) => { //Unnecessary function as the getProducts function can accept an id by itself and have the same result
    const query = knex(PRODUCT_TABLE).where('id', id);
    const result = await query;
    return result;
};

const getProducts = async(id, name, amount, price) =>{ //This returns products based on a dynamic search query that can include 
    // at least one/any combination of the above parameters. 
    const query = knex(PRODUCT_TABLE)
        .where((builder)=>{
            if(id){
                builder.where('id', id);
            }
        })
        .where((builder)=>{
            if(name){
                builder.where('name', name);
            }
        })
        .where((builder)=>{
            if(amount){
                builder.where('amount', amount);
            }
        })
        .where((builder)=>{
            if(price){
                builder.where('price', price);
            }
        })
        const result = await query;
        return result;
};

const getProductByTag = async(tag)=>{
    const query = knex(PRODUCT_TABLE)
    .modify(function(joinquery){
        if(tag){
            joinquery.join('tags','product.id','=','tags.product_id' );
        }
    })
    const result = await query;
    return result;
};

const createNewProduct = async (name, price, amount, username) => {
    const query = knex(PRODUCT_TABLE).where('farmer_username', username).update({
        name, price, amount
    });
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
    const product = await knex(PRODUCT_TABLE).where({ id });
    if(product[0].likes == null){
        product[0].likes == 0;
    }
    if(product[0].dislikes == null){
        product[0].dislikes == 0;
    }
    console.log('product', product[0]);
    var query; 
    if(like_or_dislike == "like"){
        const likes = product[0].likes + 1;
        query = knex(PRODUCT_TABLE).where({ id }).update({ likes : likes });
    }else if(like_or_dislike == "dislike"){
        const dislikes = product[0].dislikes + 1;
        query = knex(PRODUCT_TABLE).where({ id }).update({ dislikes : dislikes });
    }
    const result = await query;
    return result;
};

module.exports = {
    getProductByFarmer,
    postProduct,
    putProduct,
    deleteProduct,
    getProducts,
    getProductById,
    getProductByTag,
    createNewProduct,
    findProductByID,
    updateAmount,
    updateProductReview
}
