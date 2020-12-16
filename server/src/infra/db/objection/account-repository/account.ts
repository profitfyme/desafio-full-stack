import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { Users } from '../models/users'
import { ObjectionHelper } from '../helper/objection-helper'
import { LoadAccountByEmailRepository } from '../../../../data/protocols/load-account-by-email-repository'
import { UpdateAccessTokenRepository } from '../../../../data/protocols/update-access-token-repository'

export class AccountObjectionRepository implements AddAccountRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const result = await Users.query().insert(accountData).returning('*')
    return ObjectionHelper.users(result)
  }

  async loadByEmail (email: string): Promise<AccountModel> {
    const account = await Users.query().findOne({ email }).execute()
    return account
  }

  async updateAccessToken (id: string, token: string): Promise<void> {
    await Users.query().patch({ access_token: token }).where({ id }).execute()
  }
}
