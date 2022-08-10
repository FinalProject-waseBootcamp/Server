import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = System & Document;

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
  adminId: string;

  @Prop({ required: true })
  communicationDetails: string;
}

export const SystemSchema = SchemaFactory.createForClass(System);
