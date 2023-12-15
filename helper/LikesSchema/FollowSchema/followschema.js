import mongoose, { Schema } from "mongoose";

const FollowSchema = new Schema({
    userid: {
         type: Schema.Types.ObjectId,
          ref: 'signup'
         },
         profileid: {
            type: Schema.Types.ObjectId,
             ref: 'signup'
            }
});

export const follow = mongoose.models.follow || mongoose.model("follow", FollowSchema);