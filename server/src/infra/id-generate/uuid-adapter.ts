import { v4 as uuidv4 } from 'uuid'
import { GenerateId } from '../../data/protocols/generate-id'

export class UuidAdapter implements GenerateId {
  async generate (): Promise<string> {
    const id = await uuidv4()
    return id
  }
}
