import mongoose from 'mongoose';

export interface Managers extends mongoose.Document {
    user_id:  mongoose.Schema.Types.ObjectId,
    systemId:  mongoose.Schema.Types.ObjectId,
    active: boolean,
    display_name: string,
    role: Roles,
    invitation_sent: string;
}