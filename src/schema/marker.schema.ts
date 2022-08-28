import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';


@Schema()
export class Marker {
  constructor() {
    console.log('marker construct');
  }

  @Prop({ required: true })
  managerId:  string;

  @Prop({ required: true })
  systemId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  lat: number;

  @Prop({ required: true })
  lng: number;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  city: string;

  @Prop()
  color?:string;

  @Prop()
  notes?: string;

  @Prop()
  email?: string;
  
  @Prop({ required: true })
  phone?: string;
}

export const MarkerSchema = SchemaFactory.createForClass(Marker);


