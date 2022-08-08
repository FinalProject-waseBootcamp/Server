import mongoose from 'mongoose';

export interface System extends mongoose.Document {
  name: string;
  description: string;
  adminId: string;
}
