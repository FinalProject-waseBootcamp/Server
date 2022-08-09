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

// export const UserSchema=new mongoose.Schema({
//   firstName: {type: String, required: true },
//   lastName: {type: String, required: true },
//   email: {type: String, required: true }
// });

// export type UserDocument = User & Document;
