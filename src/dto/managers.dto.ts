import mongoose from 'mongoose';

export interface Managers extends mongoose.Document {
    user_id: string,
    systemId: string,
    active: boolean,
    display_name: string,
    role: Roles,
    invitation_sent: string;
}