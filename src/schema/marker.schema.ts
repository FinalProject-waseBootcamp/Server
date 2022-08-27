import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Marker {
  constructor() {
    console.log('marker construct');
  }

//   @Prop({ required: true })
//   uid: string;


  @Prop({ required: true })
  systemId: string;

  @Prop({ required: true })
  name:string;

  @Prop({ required: true })
  description:string;

  @Prop({ required: true })
  lat:number;

  @Prop({ required: true })
  lng:number;

  @Prop({ required: true })
  address:string;

  @Prop({ required: true })
  color?:string;
}

export const MarkerSchema = SchemaFactory.createForClass(Marker);


