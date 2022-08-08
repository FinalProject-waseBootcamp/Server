import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { initializeApp } from 'firebase-admin/app';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import { ServiceAccount } from "firebase-admin";
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('App');
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  // const configService: ConfigService = app.get(ConfigService);
  // // Set the config options
  // const adminConfig: ServiceAccount = {
  //   "projectId": configService.get<string>(process.env.FIREBASE_PROJECT_ID),
  //   "privateKey": configService.get<string>(process.env.FIREBASE_PRIVATE_KEY)
  //   .replace(/\\n/g, '\n'),
  //   "clientEmail": configService.get<string>(process.env.FIREBASE_CLIENT_EMAIL),
  // };
  
  // admin.initializeApp({
  //   credential: admin.credential.cert(adminConfig),
  //   // databaseURL: "https://xxxxx.firebaseio.com",
  // });
  await app.listen(
    // configService.get<string>('API_PORT') ||
    3333);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyACOl3OJgiJpk5luBai21eY1TVhHq3gOSo",
//   authDomain: "mapswithnestjs.firebaseapp.com",
//   projectId: "mapswithnestjs",
//   storageBucket: "mapswithnestjs.appspot.com",
//   messagingSenderId: "579480671622",
//   appId: "1:579480671622:web:64eec2469c4cff8a0dc807",
//   measurementId: "G-Q87M89KWXW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

