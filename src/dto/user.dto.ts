/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';

export interface User extends mongoose.Document {
  firstName: number;
  lastName: string;
  email: string;
}
