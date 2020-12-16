import { AccountModel } from '../models/account-model'

export interface AddAccountModel {
  name: string
  surname: string
  email: string
  phone: string
  password: string
  passwordConfirmation: string
}

export interface AddAccount {
  add: (params: AddAccountModel) => Promise<AccountModel>
}
