import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
    title: {
        type: String,
        requird: true
    },
    text: String,
    userid: {
       type:  mongoose.Schema.Types.ObjectId,
       ref: "signups",
       requird : true
    }

});

export const task = mongoose.models.tasks || mongoose.model("tasks", UserSchema);