const { Post } = require('../models');

const postdata = [
// post data in objects
];

// send to seed post data
const seedPosts = () => Post.bulkCreate(postdata);

// export posts seeds
module.exports = seedPosts;