import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import  {RequestsSchema}  from '../schema/requests.schema';
import { RequestsController } from './requests.controller';
import { RequestsService } from './requests.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Requests', schema: RequestsSchema }])],
    providers: [RequestsService],
    controllers: [RequestsController]
})
export class RequestsModule {}