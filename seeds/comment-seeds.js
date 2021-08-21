const { Comment } = require('../models');

const commentdata = [
// post data in objects
];

// send to seed comments data
const seedComments = () => Comment.bulkCreate(commentdata);

// export comments seeds
module.exports = seedComments;
