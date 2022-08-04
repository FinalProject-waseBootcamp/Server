/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Ron:vCYuIhUCuPxa79rK@teat-nestjs.z5gnevy.mongodb.net/nest-maps?retryWrites=true&w=majority',
    ),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
