import mongoose, {Schema} from "mongoose";

const signupSchema = new Schema({
    username: {
        type: String,
        requird: true
    },
    email: String,
    password: String
});

export const signup = mongoose.models.signup || mongoose.model("signup", signupSchema);