const { Post } = require('../models');

const postData = [{
        title: 'Wayne Gretzky',
        content: 'A good hockey player plays where the puck is. A great hockey player plays where the puck is going to be.',
        user_id: 1
    },
    {
        title: 'Mario Lemieux',
        content: 'Every day is a great day for hockey.',
        user_id: 2
    },
    {
        title: 'Rodney Dangerfield',
        content: 'I went to a fight the other night, and a hockey game broke out.',
        user_id: 3
    },
    {
        title: 'Joe Sakic',
        content: 'Im leaving the game of hockey with nothing but great memories.',
        user_id: 4
    },
    {
        title: 'Wayne Gretzky',
        content: 'You miss 100% of the shots you dont take.',
        user_id: 5
    },
    {
        title: 'Bobby Orr',
        content: 'Hockey is a tough game.',
        user_id: 6
    },
    {
        title: 'Jim McKenny',
        content: 'Half the game is mental; the other half is being mental.',
        user_id: 7
    },
    {
        title: 'unknown',
        content: 'My other car is a Zamboni.',
        user_id: 8
    }
    
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
