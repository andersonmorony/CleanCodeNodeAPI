import { SingUpController } from '../../presentation/controllers/singUp/singup'
import { EmailValidatorAdapter } from '../../utils/email-validator-adaper'
import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/cryptography/bcrypt-adapter'
import { AccountMongoReposiroty } from '../../infra/db/mongodb/account-repository/account'

export const makeSingUpController = (): SingUpController => {
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const salt = 12
  const bcrypterAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoReposiroty()
  const dbAddAccount = new DbAddAccount(bcrypterAdapter, accountMongoRepository)
  const singUpController = new SingUpController(emailValidatorAdapter, dbAddAccount)
  return singUpController
}
