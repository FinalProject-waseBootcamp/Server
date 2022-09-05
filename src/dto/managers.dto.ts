import mongoose from 'mongoose';

export interface Manager extends mongoose.Document {
    user_id: string,
    systemId: string,
    active: boolean,
    display_name: string,
    role: Roles,
    invitation_sent: string;
}

