import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';


@Schema()
export class Managers {
  constructor() {
    console.log('managers construct');
  }


  @Prop({ required: true })
  user_id:  mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  systemId:  mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  active: boolean;

  @Prop({ required: true })
  display_name: string;

  @Prop({ required: true })
  role: Roles;

  @Prop({ required: true })
  invitation_sent: string;

}

export const ManagersSchema = SchemaFactory.createForClass(Managers);
