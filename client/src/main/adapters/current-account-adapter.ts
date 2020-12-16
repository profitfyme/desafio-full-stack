import { makeLocalStorageAdapter } from '../factories/cache/local-storage-adapter-factory'
import { AccountModel } from '../../domain/models/account-model'

export const setCurrentAccountAdapter = (account: AccountModel): void => {
  makeLocalStorageAdapter().set('account', account)
}

export const getCurrentAccountAdapter = (): AccountModel => {
  return makeLocalStorageAdapter().get('account')
}
