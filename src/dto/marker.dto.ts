import mongoose from 'mongoose';

export interface Marker extends mongoose.Document {
    managerId: string,
    systemId:  string,
    lat:number,
    lng:number,
    name:string ,
    description:string,
    address:string,
    city?:string,
    color?:string,
    notes?: string,
    email?: string,
    phone?: string,
}
