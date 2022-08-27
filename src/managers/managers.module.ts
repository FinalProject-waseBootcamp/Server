import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ManagersSchema } from 'src/schema/managers.schema';
import { ManagersController } from './managers.controller';
import { ManagersService } from './Managers.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Managers', schema: ManagersSchema }])],
    providers: [ManagersService],
    controllers: [ManagersController]
})
export class ManagersModule {}