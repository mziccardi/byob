
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('restaurants',function(table){
      table.increments('id').primary()
      table.string('name')
      table.string('type')


      table.timestamps()
    }),

    knex.schema.createTable('reviews', function(table){
      table.increments('id').primary()
      table.integer('restaurantId')
        .references('id')
        .inTable('restaurants')
      table.integer('userId')
        .references('id')
        .inTable('users')
      table.text('review')
      table.timestamps()
    }),

    knex.schema.createTable('users',function(table){
      table.increments('id').primary()
      table.string('firstname')
      table.string('lastname')

      table.timestamps()
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('reviews'),
    knex.schema.dropTable('restaurants'),
    knex.schema.dropTable('users')
  ])

};
