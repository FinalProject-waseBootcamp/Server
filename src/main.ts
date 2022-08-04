import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3333);
  app.useGlobalPipes(new ValidationPipe());
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
