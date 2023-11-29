import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    title: {
        type: String,
    },
    text: String,
    name: String,
    userid: {
         type: Schema.Types.ObjectId,
          ref: 'signup'
         },
         
});

export const task = mongoose.models.tasks || mongoose.model("tasks", UserSchema);