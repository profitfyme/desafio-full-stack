import { FieldValidation } from '../../protocols/field-validation'
import { InvalidFieldError } from '../../errors/invalid-field-error'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {}

  validate (input: object): Error {
    return input[this.field]?.length < this.minLength ? new InvalidFieldError() : null
  }
}
