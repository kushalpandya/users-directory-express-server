import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  id: number;
  name: string;
  dob: Date;
  email: string;
  created: number;
  updated: number;
}

export const UserSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true },
  created: { type: Number, required: true },
  updated: { type: Number, required: false }
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
