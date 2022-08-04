import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeApp } from 'firebase-admin/app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3333);
  app.useGlobalPipes(new ValidationPipe());
  console.log(`Application is running on: ${await app.getUrl()}`);
  // initializeApp({
  //   // credential: applicationDefault(),
  //   // databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
  // });
  const app0= initializeApp();
}
bootstrap();



