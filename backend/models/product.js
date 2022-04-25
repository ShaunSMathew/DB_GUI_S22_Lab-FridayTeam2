const knex = require('../knex.js');

const PRODUCT_TABLE = 'product';
const FARMER_TABLE = 'farmer';

const getProductByFarmer = async (username) => { //Returns a list of all products listed with that farmer's username
    const query = knex(PRODUCT_TABLE).where('farmer_username', username);
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



module.exports = {
    getProductByFarmer,
    getProducts,
    getProductById
}