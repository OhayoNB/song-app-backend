import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  let corsOptions;
  if (process.env.NODE_ENV === 'production') {
    corsOptions = {
      origin: [
        'http://localhost:3000',
      ],
      credentials: true,
    };
  } else {
    corsOptions = {
      origin: [
        'http://localhost:3000',
      ],
      credentials: true,
    };
  }
  app.enableCors(corsOptions);
  await app.listen(3030);
}
bootstrap();
