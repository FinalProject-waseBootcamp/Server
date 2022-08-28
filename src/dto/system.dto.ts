import mongoose from 'mongoose';

export interface System extends mongoose.Document {
  uid: string|undefined ;
  adminId:  mongoose.Schema.Types.ObjectId;
  name: string;
  topic: string;
  description: string;
  communicationDetails: string;
  imgUrl : string;
  siteUrl: string;
}
