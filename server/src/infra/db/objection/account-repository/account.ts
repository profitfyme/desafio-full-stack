import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { Users } from '../models/users'
import { ObjectionHelper } from '../helper/objection-helper'

export class AccountObjectionRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const result = await Users.query().insert(accountData).returning('*')
    return ObjectionHelper.users(result)
  }
}
