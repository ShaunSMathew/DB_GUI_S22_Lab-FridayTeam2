const knex = require('../knex.js');

const SCHEDULE_TABLE = 'schedule';

const getScheduleByFarmer = async (username) => {
    const query = knex(SCHEDULE_TABLE).where('farmer_username', username);
    const result = await query;
    return result;
};

const postEntry = async (date, time, entry, farmer_username) => {
    const query = knex(SCHEDULE_TABLE).insert({date, time, entry, farmer_username});
    const resultID = await query;
    const result = knex(SCHEDULE_TABLE).where('id', resultID);
    return result;
};

const putEntry = async (date, time, entry, farmer_username) => {
    const query = knex(SCHEDULE_TABLE).where('id', id).update({date, time, entry, farmer_username});
    const result = await query;
    const product = knex(SCHEDULE_TABLE).where('id', result);
    return product;
};

const deleteEntry = async (id) => {
    const query = knex(SCHEDULE_TABLE).where('id', id).del();
    const result = await query;
    return result;
};

module.exports = {
    getScheduleByFarmer,
    postEntry,
    putEntry,
    deleteEntry
}