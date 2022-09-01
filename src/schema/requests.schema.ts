import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type RequestsrDocument = Requests & Document;

@Schema()
export class Requests {
  constructor() {
    console.log('requests construct');
  }

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  system_id: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  email: string;

  @Prop({ required: true })
  phone: string;

  // @Prop({ required: true })
  // NotesForManager: string ;

  @Prop({ required: true })
  display_name: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  notesForDisplay: string;

  @Prop({ type: Object })
  markerAddress: {
    land: string;
    city: string;
    street: string;
    building: string;
  };
}

export const RequestsSchema = SchemaFactory.createForClass(Requests);
