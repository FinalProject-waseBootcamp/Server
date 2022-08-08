import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = System & Document;

@Schema()
export class System {
  constructor() {
    console.log('system construct');
  }
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  adminId: string;
}

export const SystemSchema = SchemaFactory.createForClass(System);
