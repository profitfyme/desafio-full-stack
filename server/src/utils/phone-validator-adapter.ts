import { PhoneValidator } from '../presentation/protocols/phone-validator'

// Implementar validação de telefone
export class PhoneValidatorAdapter implements PhoneValidator {
  isValid (email: string): boolean {
    return true
  }
}
