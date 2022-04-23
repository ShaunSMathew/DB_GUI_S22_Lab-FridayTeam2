const knex = require('../knex.js');

const REVIEW_TABLE = 'review';

const getReviewByFarmer = async (username) => {
    const query = knex(REVIEW_TABLE).where('farmer_username', username);
    const result = await query;
    return result;
};

module.exports = {
    getReviewByFarmer
}