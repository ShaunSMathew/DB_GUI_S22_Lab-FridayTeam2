const knex = require('../knex.js');
const bcrypt = require('bcrypt');

const USER_TABLE = 'user';

const createNewUser = async (username, password) => {
    // console.log('Raw password:', password);
    const salt = await bcrypt.genSalt(10);
    //console.log('Password salt', salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    // console.log('Hashed password', hashedPassword);
    const query = knex(USER_TABLE).insert({ username, password: hashedPassword });
    // const query = knex(USER_TABLE).insert({ username, password });
    console.log('Raw query for createNewUser:', query.toString());
    const result = await query;
    console.log('Result:', result);
    return {username, hashedPassword};
};

const findUserByUsername = async (username) => {
    const query = knex(USER_TABLE).where({ username });
    const result = await query;
    console.log('Result:', result);
    return result;
}

const authenticateUser = async (username, password) => {
    const users = await findUserByUsername(username);
    console.log('Result of users query', users);
    if (users.length === 0) {
        console.error(`No users matched the username: ${username}`);
        return null;
    }
    const user = users[0];
    const validPassword = await bcrypt.compare(password, user.password);
    console.log('Valid Password or not:', validPassword)
    if (validPassword) {
        delete user.password;
        return user;
    }
    return null;
}


module.exports = {
    createNewUser,
    findUserByUsername,
    authenticateUser
};