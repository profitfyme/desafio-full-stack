import { SignUpController } from '../../presentation/controllers/signup'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'
import { PhoneValidatorAdapter } from '../../utils/phone-validator-adapter'
import { DbAddAccount } from '../../data/usecases/db-add-account'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { UuidAdapter } from '../../infra/id-generate/uuid-adapter'
import { AccountObjectionRepository } from '../../infra/db/objection/account-repository/account'

export const makeSignUpController = (): SignUpController => {
  const salt = 12
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const phoneValidatorAdapter = new PhoneValidatorAdapter()
  const bcryptAdapter = new BcryptAdapter(salt)
  const uuidAdapter = new UuidAdapter()
  const accountObjectionRepository = new AccountObjectionRepository()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountObjectionRepository, uuidAdapter)
  return new SignUpController(emailValidatorAdapter, phoneValidatorAdapter, dbAddAccount)
}
