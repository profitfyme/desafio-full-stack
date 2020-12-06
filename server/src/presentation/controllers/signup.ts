import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { InvalidParamError } from '../errors/invalid-param-error'
import { badRequest, serverError } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { EmailValidator } from '../protocols/email-validator'
import { PhoneValidator } from '../protocols/phone-validator'
import { AddAccount } from '../../domain/usecases/add-account'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  private readonly phoneValidator: PhoneValidator
  private readonly addAccount: AddAccount

  constructor (emailValidator: EmailValidator, phoneValidator: PhoneValidator, addAccount: AddAccount) {
    this.emailValidator = emailValidator
    this.phoneValidator = phoneValidator
    this.addAccount = addAccount
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = [
        'name',
        'surname',
        'email',
        'phone',
        'password',
        'passwordConfirmation'
      ]
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, surname, email, phone, password, passwordConfirmation } = httpRequest.body
      const isEmailValid = this.emailValidator.isValid(email)
      if (!isEmailValid) {
        return badRequest(new InvalidParamError('email'))
      }
      const isPhoneValid = this.phoneValidator.isValid(phone)
      if (!isPhoneValid) {
        return badRequest(new InvalidParamError('phone'))
      }
      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }
      this.addAccount.add({
        name,
        surname,
        email,
        phone,
        password
      })
    } catch {
      return serverError()
    }
  }
}
