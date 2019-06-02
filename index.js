import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import logger from './utils/errors/errorlogger'
import routeDependencies from './routes/routedependencies'
const app = express()
app.use(helmet())
app.use(morgan('combined', { 'stream': logger.stream }))
routeDependencies(app)
const port = process.env.RACS_PORT || 7005
app.listen(port, () => {
  logger.info(`Listening to port ${port}.......`)
})
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
})
process.on('uncaughtException', (ex) => {
  logger.error(ex.message, ex)
})
process.on('unhandledRejection', (ex) => {
  logger.error(ex.message, ex)
})
