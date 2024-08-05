import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    email: string;
    passwordHash: string;
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
});

export default mongoose.model<IUser>('User', UserSchema);
