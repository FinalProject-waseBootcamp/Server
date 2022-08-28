import mongoose from 'mongoose';

export interface System extends mongoose.Document {
  uid: string|undefined ;
  adminId:  string;
  name: string;
  topic: string;
  description: string;
  communicationDetails: string;
  imgUrl : string;
  siteUrl: string;
}
