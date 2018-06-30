exports.up = (knex, Promise) => {
    return knex.schema.createTableIfNotExists('Foods', function (table) {
      table.increments().primary()
      table.string('name')
      table.string('category')
      table.string('measurement_units')
      table.boolean('sweet')
      table.boolean('savoury')
      table.integer('sloppiness')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('Foods')
  }