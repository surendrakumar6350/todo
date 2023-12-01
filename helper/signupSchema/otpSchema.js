import mongoose, {Schema} from "mongoose";

const otpSchema = new Schema({
    email: String,
    otp: String,
});

export const otp = mongoose.models.otp || mongoose.model("otp", otpSchema);