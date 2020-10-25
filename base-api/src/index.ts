import './global';

import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from 'modules';
import { default as morgan} from 'morgan';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { IS_DEV, IS_PROD, NODE_ENV, VERSION, PORT, HOST } from 'vars';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { TransformInterceptor } from 'modules/common/interceptors/transform.interceptor';
import { DefaultExceptionsFilter } from 'modules/common/filters/default-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  const corsOptions: CorsOptions = {
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    preflightContinue: false,
    optionsSuccessStatus: 200,
  };

  if (IS_DEV) {
    app.use(morgan('dev'));
  }

  app.enableCors(corsOptions);
  app.useGlobalPipes(new ValidationPipe({ transform: true, disableErrorMessages: IS_PROD, forbidUnknownValues: true }));
  app.useGlobalFilters(new DefaultExceptionsFilter());
  app.useGlobalInterceptors(new TransformInterceptor());

  const swaggerOptions = new DocumentBuilder()
    .setTitle('base-api')
    .setDescription('Project API')
    .setVersion(`1.${VERSION}`)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('/swagger', app, document);

  await app.listen(PORT, HOST, () => {
    console.log(`#> Server started as ${NODE_ENV}`);
  });

  process.on('unhandledRejection', (reason, promise) => {
    console.error(reason);
    console.log(promise);
  });

  process.on('uncaughtException', err => {
    console.error(err);
  });

  process.on('SIGTERM', async () => {
    await app.close();
    process.exit(0);
  });
}
bootstrap();
