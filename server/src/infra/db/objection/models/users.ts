import { Model } from 'objection'

export class Users extends Model {
  static tableName = 'users'

  id!: string
  name!: string
  surname!: string
  email!: string
  phone!: string
  password!: string
  access_token: string

  static jsonSchema = {
    type: 'object',
    required: ['name', 'surname', 'email', 'phone', 'password'],

    properties: {
      id: { type: 'string' },
      name: { type: 'string', maxLength: 15 },
      surname: { type: 'string', maxLength: 30 },
      email: { type: 'string', maxLength: 50 },
      phone: { type: 'string', maxLength: 13 },
      password: { type: 'string', maxLength: 255 },
      access_token: { type: 'string', maxLength: 255 }
    }
  }
}
