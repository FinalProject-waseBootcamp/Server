import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type SystemDocument = System & Document;

@Schema()
export class System {
  
  constructor() {
    console.log('system construct');
  }

  // @Prop()
  // uid: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  topic: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  adminId:  string;

  @Prop({ required: true })
  communicationDetails: string;

  @Prop({ required: true })
  imgUrl : string;

  @Prop({ required: true })
  siteUrl: string;
}

export const SystemSchema = SchemaFactory.createForClass(System);
