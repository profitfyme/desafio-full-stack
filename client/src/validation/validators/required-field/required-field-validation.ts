import { FieldValidation } from '../../protocols/field-validation'
import { RequiredFieldError } from '../../errors/required-field-error'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (input: object): Error {
    return input[this.field] ? null : new RequiredFieldError()
  }
}
