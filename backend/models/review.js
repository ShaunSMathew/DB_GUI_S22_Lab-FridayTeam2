const knex = require('../knex.js');

const REVIEW_TABLE = 'review';

const getReviewByFarmer = async (username) => {
    const query = knex(REVIEW_TABLE).where('farmer_username', username);
    const result = await query;
    return result;
};

const createNewReview = async (text, farmer_username) => {
    const query = knex(REVIEW_TABLE).insert({ text, farmer_username});
    console.log('Raw query for createNewReview:', query.toString());
    const result = await query;
    return result;
};

module.exports = {
    getReviewByFarmer,
    createNewReview
}
