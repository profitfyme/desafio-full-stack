import express from 'express'
import { Model } from 'objection'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'
import knex from '../../infra/db/objection/config/config'

Model.knex(knex)

const app = express()
setupMiddlewares(app)
setupRoutes(app)

export default app
