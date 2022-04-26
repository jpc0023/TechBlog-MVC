const { Comment } = require('../models');

const commentData = [{
        comment_text: "We know there have been thousands of hockey quotes throughout history",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Hockey players have fire in their hearts and ice in their veins.",
        user_id: 11,
        post_id: 2
    },
    {
        comment_text: "My goal is to deny yours.",
        user_id: 10,
        post_id: 3
    },
    {
        comment_text: "To win the game is great. To play the game is greater. To love the game is greatest of all — Bob oConnor",
        user_id: 11,
        post_id: 4
    },
    {
        comment_text: "When you play hockey, you don't have any fear. As soon as you step on the ice everything goes away and you're focusing on the puck and focusing on the play - Alexander Ovechkin",
        user_id: 8,
        post_id: 4
    },
    {
        comment_text: "Its not necessarily the amount of time you spend at practice that counts; its what you put into the practice.- Eric Lindros",
        user_id: 9,
        post_id: 4
    },
    {
        comment_text: "You find that you have peace of mind and can enjoy yourself, get more sleep, rest when you know that it was a one hundred percent effort that you gave – win or lose.- Gordie Howe",
        user_id: 9,
        post_id: 7
    }
    
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
