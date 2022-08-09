import mongoose from 'mongoose';

export interface User extends mongoose.Document {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  // role: Roles;
  phone: string;
}
