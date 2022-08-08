import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from './auth/auth.middleware';
import { SystemModule } from './system/system.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-db'),
    // ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    UserModule,
    AuthModule,
    SystemModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*', method: RequestMethod.ALL
    });
  }
}
