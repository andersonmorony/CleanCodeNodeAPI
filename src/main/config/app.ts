import express from 'express'
import setupMiddleware from './middlawares'
import setupRoute from './routes'

const app = express()
setupMiddleware(app)
setupRoute(app)
export default app
