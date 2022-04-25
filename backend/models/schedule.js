const knex = require('../knex.js');

const SCHEDULE_TABLE = 'schedule';

const getScheduleByFarmer = async (username) => {
    const query = knex(SCHEDULE_TABLE).where('farmer_username', username);
    const result = await query;
    return result;
};

module.exports = {
    getScheduleByFarmer
}