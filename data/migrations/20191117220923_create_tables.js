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
        tbl.string('description', 2000).notNullable().defaultTo('');
        tbl.integer('isPrivate').notNullable().defaultTo(1);
        tbl.integer('isProfessional').notNullable().defaultTo(1);
        tbl.string('image', 2000).notNullable().defaultTo('');
        tbl.float('duration').notNullable().defaultTo(1);
        tbl.float('distance').notNullable().defaultTo(1);
        tbl.timestamp('date').notNullable().defaultTo(knex.fn.now());
        tbl.string('tripType', 255).notNullable().defaultTo('');
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('trips')
    .dropTableIfExists('users');
};
