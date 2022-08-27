import { Module } from '@nestjs/common';
import { SystemService } from './system.service';
import { SystemController } from './system.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemSchema } from '../schema/system.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'System', schema: SystemSchema }])],
  providers: [SystemService],
  controllers: [SystemController]
})
export class SystemModule {}

