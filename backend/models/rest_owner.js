const knex = require('../knex.js');
const bcrypt = require('bcrypt');

const REST_OWNER_TABLE = 'rest_owner';

const createNewRestOwner = async(username, password)=>{
    console.log('raw password: ', password);
    const salt = await bcrypt.genSalt(10);
    console.log('Password salt', salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('Hashed password', hashedPassword);

    const query = knex(REST_OWNER_TABLE).insert({ email, password: hashedPassword });
    console.log('Raw query for createNewRestOwner:', query.toString());
    const result = await query;

    return result;
};

const findRestOwnerByUsername = async (username) => {
    const query = knex(REST_OWNER_TABLE).where({ username });
    const result = await query;
    return result;
}

const authenticateRestOwner = async (username, password) => {
    const users = await findUserByEmail(email);
    console.log('Results of Rest Owner query', users);
    if (users.length === 0) {
        console.error(`No Rest Owner matched the username: ${email}`);
        return false;
    }
    const user = users[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
        return true;
    }
    return false;
}

module.exports = {
    createNewRestOwner,
    findRestOwnerByUsername,
    authenticateRestOwner
};