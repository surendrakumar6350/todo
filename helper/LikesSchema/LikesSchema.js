import mongoose, { Schema } from "mongoose";

const LikesSchema = new Schema({
    userid: {
         type: Schema.Types.ObjectId,
          ref: 'signup'
         },
         postid: {
            type: Schema.Types.ObjectId,
             ref: 'tasks'
            }
});

export const Likes = mongoose.models.Likes || mongoose.model("Likes", LikesSchema);