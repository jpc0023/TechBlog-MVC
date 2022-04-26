const { User } = require('../models');

const userdata = [
  {
    username: 'PatriceBergeron',
    email: 'bergeron@gmail.com',
    password: 'bruins'
  },
  {
    username: 'AntonBlidh',
    email: 'blidh@gmail.com',
    password: 'bruins'
  },
  {
    username: 'CharlieCoyle',
    email: 'coyle@gmail.com',
    password: 'bruins'
  },
  {
    username: 'JakeDebrusk',
    email: 'debrusk@gmail.com',
    password: 'bruins'
  },
  {
    username: 'NickFoligno',
    email: 'foligno@gmail.com',
    password: 'bruins'
  },
  {
    username: 'TrentFrederic',
    email: 'frederic@gmail.com',
    password: 'bruins'
  },
  {
    username: 'TaylorHall',
    email: 'hall@gmail.com',
    password: 'bruins'
  },
  {
    username: 'BradMarchand',
    email: 'marchand@gmail.com',
    password: 'bruins'
  },
  {
    username: 'DavidPastrnak',
    email: 'pastrnak@gmail.com',
    password: 'bruins'
  },
  {
    username: 'CharlieMcAvoy',
    email: 'mcavoy@gmail.com',
    password: 'bruins'
  },
  {
    username: 'MattGrzelcyk',
    email: 'grzelcyk@gmail.com',
    password: 'bruins'
  }

];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;