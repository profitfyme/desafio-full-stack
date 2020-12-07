var path = require('path')
require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.resolve('src', 'infra', 'db', 'objection', 'migrations'),
      tableName: 'knex_migrations'
    }
  }
}
