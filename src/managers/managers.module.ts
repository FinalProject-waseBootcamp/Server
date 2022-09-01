import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ManagersSchema } from '../schema/managers.schema';
import { ManagersController } from './managers.controller';
import { ManagersService } from './Managers.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Manager', schema: ManagersSchema }])],
    providers: [ManagersService],
    controllers: [ManagersController]
})
export class ManagersModule {}