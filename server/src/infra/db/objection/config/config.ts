import 'dotenv/config'
import knex from 'knex'

const Knex = knex({
  client: 'pg',
  useNullAsDefault: true,
  connection: process.env.DB_URL
})

export default Knex
