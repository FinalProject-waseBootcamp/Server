import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// export type UserDocument = User & Document;

@Schema()
export class User {
  constructor() {
    console.log('user construct');
  }

  @Prop({ required: true })
  uid: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  // @Prop({ required: true })
  // role: Roles;

  @Prop({ required: true })
  phone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);


