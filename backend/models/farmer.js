const knex = require('../knex.js');

const FARMER_TABLE = 'farmer';
const PRODUCT_TABLE = 'product';

const createNewFarmer = async (username) => {

    const query = knex(FARMER_TABLE).insert({ username });
    console.log('Raw query for createNewUser:', query.toString());
    const result = await query;

    return result;
};

const findUserByUsername = async (username) => {
    const query = knex(FARMER_TABLE).where({ username });
    const result = await query;
    return result;
};

const updateProfile = async (username, street_address, city, state, zip, phone_num, profile_pic) => {
    const query = await knex(FARMER_TABLE).where({ username }).update({
        street_address, city, state, zip, phone_num, profile_pic
    });
    const result = await knex(FARMER_TABLE).where({ username });
    return result;
}


const changeAddress = async (body, farmerUser, street_address, ) => {
    //const newAddress = body.address;

    const changeAddy = knex(FARMER_TABLE).where({username: farmerUser}).update({});
    console.log(`Raw query for changeAddress: `, changeAddy.toString());
    const result = await changeAddy;
    return result;
};

const deleteAddress = async(body, farmerUser) =>{
    const address = knex(FARMER_TABLE).where({username:farmerUser}).update({street_address: " ", city : " ", state: " ", zip: " "}); 
    //Not sure if this is how to do this-- don't actually want to delete anything from database
    const result = await address;
    return result;
};
const searchFarmerByLocation = async(street, city, state, zip)=>{
    const query = knex(FARMER_TABLE)
        .where((builder)=>{
            if(street){
                builder.where('street_address', street);
            }
        })
        .where((builder)=>{
            if(city){
                builder.where('city', city);
            }
        })
        .where((builder)=>{
            if(state){
                builder.where('state',state);
            }
        })
        .where((builder)=>{
            if(zip){
                builder.where('zip',zip);
            }
        })
        const result = await query;
        return result;
};


module.exports = {
    createNewFarmer,
    findUserByUsername,
    changeAddress,
    deleteAddress,
    updateProfile,
    searchFarmerByLocation
};