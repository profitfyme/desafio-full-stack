import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import {
  POSTGRES_DB as database,
  POSTGRES_USER as username,
  POSTGRES_PASSWORD as password,
  POSTGRES_HOST as host,
  POSTGRES_PORT,
} from 'vars';

export default () => <TypeOrmModuleOptions>{
  type: 'postgres',
  database,
  username,
  password,
  host,
  port: parseInt(POSTGRES_PORT, 10),
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  logging: false,
}
