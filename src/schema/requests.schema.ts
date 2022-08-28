import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type UserDocument = Requests & Document;

@Schema()
export class Requests {
  
  constructor() {
    console.log('requests construct');
  }


  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  email: string;

  @Prop({ required: true })
  phone: string ;

  @Prop({ required: true })
  system_id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  display_name : string;

  @Prop({ required: true })
  status: Status;

  @Prop({ required: true })
  notes : string;
}

export const RequestsSchema = SchemaFactory.createForClass(Requests);