const knex = require('../knex.js');

const PRODUCT_TABLE = 'product';

const getProductByFarmer = async (username) => {
    const query = knex(PRODUCT_TABLE).where('farmer_username', username);
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
    getProducts
}