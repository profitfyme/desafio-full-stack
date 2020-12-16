import { makeApiUrl } from '../http/api-url-factory'
import { makeAxiosHttpClient } from '../http/axios-http-client-factory'
import { AddAccount } from '../../../domain/usecases/add-account'
import { RemoteAddAccount } from '../../../data/usecases/remote-add-account'

export const makeRemoteAddAccount = (): AddAccount => {
  return new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosHttpClient())
}
