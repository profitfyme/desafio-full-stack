import { HttpClient, HttpStatusCode } from '../protocols/http/http-client'
import { AddAccountModel, AddAccount } from '../../domain/usecases/add-account'
import { AccountModel } from '../../domain/models/account-model'
import { UnexpectedError } from '../../domain/errors/unexpected-error'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<AccountModel>
  ) {}

  async add (params: AddAccountModel): Promise<AccountModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }
}
