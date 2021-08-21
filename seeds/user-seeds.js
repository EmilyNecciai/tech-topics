const { User, Post } = require('../models');

const userdata = [
// user data in objects
];

// send to seed user data
const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

// export user seeds
module.exports = seedUsers;
