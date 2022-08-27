import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MarkerSchema } from 'src/schema/marker.schema';
import { MarkerController } from './marker.controller';
import { MarkerService } from './marker.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Marker', schema: MarkerSchema }])],
    providers: [MarkerService],
    controllers: [MarkerController]
})
export class MarkerModule {}
