exports.up = (knex, Promise) => {
    return knex.schema.table('Foods', function (table) {
      table.integer('sloppiness')
  })
}
  
  exports.down = (knex, Promise) => {
    return knex.schema.table('Foods', function (table) {
        table.dropColumn('sloppiness')
  })
}