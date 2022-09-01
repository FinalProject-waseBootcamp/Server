import mongoose from 'mongoose';

export interface Requests extends mongoose.Document {
    status: string,
    system_id: string,
    firstName: string
    lastName: string
    email: string
    phone: string
    // notesForManager: string,
    display_name: string,
    description: string,
    notesForDisplay: string,
    markerAddress:{
        land:string,
        city:string,
        street:string,
        building:string
    }
}
