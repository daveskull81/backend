exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('username', 255).notNullable().unique();
        tbl.string('password', 255).notNullable();
        tbl.string('title', 255);
        tbl.string('tagline', 255);
        tbl.string('guideSpecialty', 255);
        tbl.integer('age');
        tbl.integer('yearsExperience');
    })
    .createTable('trips', tbl => {
        tbl.increments();
        tbl.string('title', 255).notNullable();
        tbl.string('description', 2000);
        tbl.integer('isPrivate');
        tbl.integer('isProfessional');
        tbl.image('string', 2000);
        tbl.float('duration');
        tbl.float('distance');
        tbl.timestamp('date');
        tbl.string('tripType', 255);
    });
};

exports.down = function(knex) {
  
};
