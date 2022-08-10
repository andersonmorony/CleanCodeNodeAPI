import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/account-repository/helpers/mongo-helper'

describe('Singup Router', () => {
  beforeAll(async () => {
    await MongoHelper.connect(global.__MONGO_URI__)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/singup')
      .send({
        name: 'Anderson',
        email: 'anderson@mail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
