import mongoose from 'mongoose';

export interface Marker extends mongoose.Document {
    systemId: string,
    lat:number,
    lng:number,
    name:string ,
    description:string,
    address:string,
    color?:string
}
