import { FieldValidation } from '../../protocols/field-validation'
import { InvalidFieldError } from '../../errors/invalid-field-error'

export class EmailValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (input: object): Error {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return (!input[this.field] || emailRegex.test(input[this.field])) ? null : new InvalidFieldError()
  }
}
