import { AccountModel } from '../models/account'

export interface AddAccountModel {
  name: string
  surname: string
  email: string
  phone: string
  password: string
}

export interface AddAccount {
  add (account: AddAccountModel): Promise<AccountModel>
}
