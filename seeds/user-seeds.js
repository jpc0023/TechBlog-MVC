const { User } = require('../models');

const userData = [{
        username: 'test1',
        email: 'test1@test.com',
        password: 'test1'

    },
    {
        username: 'test2',
        email: 'test2@test.com',
        password: 'test2'
    },
    {
        username: 'test3',
        email: 'test3@test.com',
        password: 'test3'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;