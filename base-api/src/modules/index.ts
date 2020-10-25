import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';

import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from 'config/typeorm.config';

import { AppModule } from './app/app.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig()),
    RouterModule.forRoutes([
      { path: '/v1', module: AppModule }
    ]),
    AppModule
  ]
})
export class ApplicationModule {}
