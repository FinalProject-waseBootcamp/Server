import mongoose from 'mongoose';

export interface Marker extends mongoose.Document {
    systemId:  mongoose.Schema.Types.ObjectId,
    lat:number,
    lng:number,
    name:string ,
    description:string,
    address:string,
    color?:string
}
