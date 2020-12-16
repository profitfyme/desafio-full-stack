import bcrypt from 'bcrypt'
import { Encrypter } from '../../data/protocols/encrypter'
import { EncrypterComparer } from '../../data/protocols/encrypter-comparer'

export class BcryptAdapter implements Encrypter, EncrypterComparer {
  private readonly salt: number

  constructor (salt: number) {
    this.salt = salt
  }

  async encrypt (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }

  async compare (value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}
