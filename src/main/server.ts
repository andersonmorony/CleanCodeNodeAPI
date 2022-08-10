import { MongoHelper } from '../infra/db/mongodb/account-repository/helpers/mongo-helper'
import env from './config/env'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(5000, () => console.log(`Server running in port ${env.port}`))
  }).catch((err) => {
    console.error(err)
  })
