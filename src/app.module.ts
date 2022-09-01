import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemModule } from './system/system.module';
import { MarkerModule } from './marker/marker.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-db'),
    // ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    UserModule,
    // AuthModule,
    SystemModule,
    MarkerModule,
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
