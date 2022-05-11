import { Schema, model, Types } from "mongoose";
import IThread from "../interfaces/IThread";

const ThreadSchema: Schema = new Schema({
    title: { type: String, required: true, unique: true },
    body: { type: String, required: true },
    posts: [Types.ObjectId],
    numberOfPosts: { type: Number, default: 0 },
    user: { type: Types.ObjectId, required: true },
    platform: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
});

export default model<IThread>("Thread", ThreadSchema);
