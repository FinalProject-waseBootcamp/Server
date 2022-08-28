import mongoose from 'mongoose';

export interface Requests extends mongoose.Document {
    firstName: string
    lastName: string
    email: string
    phone: string
    system_id: mongoose.Schema.Types.ObjectId,
    display_name: string
    status: Status,
    notes: string
}