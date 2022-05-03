const knex = require('../knex.js');

const REST_OWNER_TABLE = 'rest_owner';

const createNewOwner = async (username) => {

    const query = knex(REST_OWNER_TABLE).insert({ username });
    console.log('Raw query for createNewUser:', query.toString());
    const result = await query;

    return result;
};

const findUserByUsername = async (username) => {
    const query = knex(REST_OWNER_TABLE).where({ username });
    const result = await query;
    return result;
};

const updateProfile = async (username, street_address, city, state, zip, phone_num, profile_pic) => {
    const query = await knex(REST_OWNER_TABLE).where({ username }).update({
        street_address, city, state, zip, phone_num, profile_pic
    });
    const result = await knex(REST_OWNER_TABLE).where({ username });
};
const changeAddress = async (body, restUser) => {
    const newAddress = body.address;
    const changeAddy = knex(REST_OWNER_TABLE).where({username : restUser}).update({address:newAddress});
    console.log(`Raw query for changeAddress: `, changeAddy.toString());
    const result = await changeAddy;
    return result;
};

const deleteAddress = async(restUser) =>{
    const address = knex(REST_OWNER_TABLE).where({username : restUser}).update({address: " "}); 
    //Not sure if this is how to do this-- don't actually want to delete anything from database
    const result = await address;
    return result;
};


const changePicture = async (body, restUser) => {
    const changePic = knex(REST_OWNER_TABLE).where({username: restUser}).update({picture: body.picture});
    console.log(`Raw query for changePicture: `, changePic.toString());
    const result = await changePic;
    return result;
};

const deletePicture = async(restUser) =>{
    const deletePic = knex(REST_OWNER_TABLE).where({username:restUser}).update({profile_pic: " "}); 
    const result = await deletePic;
    return result;
};



module.exports = {
    createNewOwner,
    findUserByUsername,
    updateProfile,
    changeAddress,
    deleteAddress,
    changePicture,
    deletePicture
};
