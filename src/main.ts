import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { initializeApp } from 'firebase-admin/app';
import { Logger } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
// import { ConfigModule } from '@nestjs/config';
// ConfigModule.forRoot();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('App');
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(
    // configService.get<string>('API_PORT') ||
    3333,
  );
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
