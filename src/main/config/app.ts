import express from 'express'
import setupMiddleware from './middlawares'

const app = express()
setupMiddleware(app)
export default app
