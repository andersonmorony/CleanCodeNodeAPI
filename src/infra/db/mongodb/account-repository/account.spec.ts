import { MongoHelper } from './helpers/mongo-helper'
import { AccountMongoReposiroty } from './account'

describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(global.__MONGO_URI__)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  const makeSut = (): AccountMongoReposiroty => {
    return new AccountMongoReposiroty()
  }

  test('Should return an account on success', async () => {
    const sut = makeSut()
    const account = await sut.add({
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    })
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('valid_name')
    expect(account.email).toBe('valid_email')
    expect(account.password).toBe('valid_password')
  })
})
