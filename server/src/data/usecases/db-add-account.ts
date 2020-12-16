import { AddAccount, AddAccountModel } from '../../domain/usecases/add-account'
import { AccountModel } from '../../domain/models/account'
import { Encrypter } from '../protocols/encrypter'
import { GenerateId } from '../protocols/generate-id'
import { AddAccountRepository } from '../protocols/add-account-repository'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository
  private readonly generateId: GenerateId

  constructor (encrypter: Encrypter, addAccountRepository: AddAccountRepository, generateId: GenerateId) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
    this.generateId = generateId
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    const id = await this.generateId.generate()
    const account = await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }, { id }))
    return account
  }
}
