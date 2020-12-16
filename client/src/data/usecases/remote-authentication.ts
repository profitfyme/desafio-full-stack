import { HttpClient, HttpStatusCode } from '../protocols/http/http-client'
import { Authentication, AuthenticationParams } from '../../domain/usecases/authentication'
import { InvalidCredentialsError } from '../../domain/errors/invalid-credentials-error'
import { UnexpectedError } from '../../domain/errors/unexpected-error'
import { AccountModel } from '../../domain/models/account-model'

export class RemoteAuthentication implements Authentication {
  private readonly url: string
  private readonly httpClient: HttpClient<AccountModel>
  constructor (url: string, httpClient: HttpClient<AccountModel>) {
    this.url = url
    this.httpClient = httpClient
  }

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
