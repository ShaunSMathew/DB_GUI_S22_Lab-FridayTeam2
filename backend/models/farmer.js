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

const updateProfile = async (username, street_address, city, state, zip, phone_num) => {
    const query = await knex(FARMER_TABLE).where({ username }).update({
        street_address, city, state, zip, phone_num
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

const changePicture = async (body, farmerUser) => {
    const changePic = knex(FARMER_TABLE).where({username: farmerUser}).update({picture: body.picture});
    console.log(`Raw query for changePicture: `, changePic.toString());
    const result = await changePic;
    return result;
};

const deletePicture = async(farmerUser) =>{
    const deletePic = knex(FARMER_TABLE).where({username:farmerUser}).update({picture: " "}); 
    const result = await deletePic;
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

const addNumRatings = async(username) =>{
    const farmer = await knex(FARMER_TABLE).where({username});
    if(farmer[0].num_of_ratings == null){
        farmer[0].num_of_ratings = 0;
    }
    const num_of_ratings = farmer[0].num_of_ratings + 1;
    const qurey = knex(FARMER_TABLE).where({username}).update({num_of_ratings: num_of_ratings}); 
    console.log('addNumRatings:',qurey);
    const result = await qurey;
    return result;
}

const addSumRatings = async(username, rating) =>{
    const farmer = await knex(FARMER_TABLE).where({username});
    if(farmer[0].ratings_sum == null){
        farmer[0].ratings_sum = 0;
    }
    const ratings_sum = farmer[0].ratings_sum + rating;
    const qurey = knex(FARMER_TABLE).where({username}).update({ratings_sum: ratings_sum}); 
    console.log('addNumRatings:',qurey);
    const result = await qurey;
    return result;
}

module.exports = {
    createNewFarmer,
    findUserByUsername,
    changeAddress,
    deleteAddress,
    changePicture,
    deletePicture,
    updateProfile,
    searchFarmerByLocation,
    addNumRatings,
    addSumRatings
};
