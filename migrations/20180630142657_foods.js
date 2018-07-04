exports.up = (knex, Promise) => {
    return knex.schema.createTable('Foods', function (table) {
      table.increments('id')
      table.string('name')
      table.string('category')
      table.boolean('sweet')
      table.boolean('savoury')
      table.integer('sloppiness')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('Foods')
  }