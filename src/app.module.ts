import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemModule } from './system/system.module';
import { MarkerModule } from './marker/marker.module';
import { RequestsModule } from './requests/requests.module';
import { ManagersModule } from './managers/managers.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/nest-db'),
    MongooseModule.forRoot('mongodb+srv://E_O:rTfFpwUcIASxk0dJ@cluster0.lw3xzo6.mongodb.net/?retryWrites=true&w=majority'),
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
