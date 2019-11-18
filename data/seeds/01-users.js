const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
    return knex('users').insert([
      { 
        username: 'user1',
        password: bcrypt.hashSync('pass', 10),
        title: 'Expert Backpacker',
        tagline: 'I am so very good at backpacking',
        guideSpecialty: 'Extreme Backpacking',
        age: 35,
        yearsExperience: 15
      },
      { 
        username: 'user2',
        password: bcrypt.hashSync('pass', 10),
        title: 'Master Rockclimber',
        tagline: 'I love rocks and climbing them is the best!',
        guideSpecialty: 'Climbing',
        age: 31,
        yearsExperience: 10
      }
    ]);
};
