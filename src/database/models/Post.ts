import { Schema, model, Types } from "mongoose";
import IPost from "../interfaces/IPost";

const PostSchema: Schema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    user: { type: Types.ObjectId, required: true },
    votes: [ Types.ObjectId ],
    tags: [ String ],
    comments: [{ user: Types.ObjectId, message: String, votes: Number, createdAt: Date }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
});

export default model<IPost>("Post", PostSchema);