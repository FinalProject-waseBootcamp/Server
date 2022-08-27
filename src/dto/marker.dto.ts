import mongoose from 'mongoose';

export interface Marker extends mongoose.Document {
    managerId: string,
    systemId:  mongoose.Schema.Types.ObjectId,
    lat:number,
    lng:number,
    name:string ,
    description:string,
    address:string,
    color?:string,
    notes?: string,
    email?: string,
    phone?: string,
}
