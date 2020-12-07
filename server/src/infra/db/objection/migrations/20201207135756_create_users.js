const tableName = 'users'
exports.up = function (knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.uuid('id').unique().primary().notNullable()
    table.string('name', 15).notNullable()
    table.string('surname', 30).notNullable()
    table.string('email', 50).unique().notNullable()
    table.string('phone', 50).unique().notNullable()
    table.string('password', 255).notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable(tableName)
}
