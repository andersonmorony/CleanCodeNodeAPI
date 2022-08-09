import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecase/add-account'
import { MongoHelper } from './helpers/mongo-helper'

export class AccountMongoReposiroty implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const account = (await accountCollection.findOne<AccountModel>({ _id: result.insertedId }) as any)
    console.log(account)
    return {
      id: account._id,
      name: account.name,
      email: account.email,
      password: account.password
    }
  }
}
