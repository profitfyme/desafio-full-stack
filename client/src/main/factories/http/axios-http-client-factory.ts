import { AxiosHttpClient } from '../../../infra/http/axios-http-client/axios-http-adapter'

export const makeAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}
