import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from './auth/auth.middleware';
import { SystemModule } from './system/system.module';
import { MarkerModule } from './marker/marker.module';
import { RequestsModule } from './requests/requests.module';
import { ManagersModule } from './managers/managers.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-db'),
    // ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    // AuthModule,
    UserModule,
    SystemModule,
    MarkerModule,
    RequestsModule,
    ManagersModule,
  ]
})
export class AppModule{}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(AuthMiddleware).forRoutes({
//       path: '*', method: RequestMethod.ALL
//     });
//   }
// }
