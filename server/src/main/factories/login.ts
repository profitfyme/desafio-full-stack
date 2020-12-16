import { Controller } from '../../presentation/protocols/controller'
import { LoginController } from '../../presentation/controllers/login'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'
import { DbAuthentication } from '../../data/usecases/db-authentication'
import { AccountObjectionRepository } from '../../infra/db/objection/account-repository/account'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { JwtAdapter } from '../../infra/criptography/jwt-adapter'

export const makeLoginController = (): Controller => {
  const salt = 12
  const accountObjectionRepository = new AccountObjectionRepository()
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter('teste')
  const dbAuthentication = new DbAuthentication(accountObjectionRepository, bcryptAdapter, jwtAdapter, accountObjectionRepository)
  const emailValidatorAdapter = new EmailValidatorAdapter()
  return new LoginController(emailValidatorAdapter, dbAuthentication)
}
