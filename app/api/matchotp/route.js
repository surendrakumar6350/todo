import { connectdb } from "@/helper/md";
import { otp } from "@/helper/signupSchema/otpSchema";
import { NextResponse } from "next/server";
import { signup } from "@/helper/signupSchema/Schema";

export async function POST(request) {
    const {id, ootp, username, email, password} = await request.json();
    await connectdb();
const finding = await otp.findById(id)
if(finding.otp == ootp) {
        connectdb();
       const newuser = new signup({
        username,
        email,
        password
       });
       const ohk = await newuser.save();
       const response = NextResponse.json({
        success: true,
        message: "otp matched"
    })
    response.cookies.set("user", ohk._id, {
        expires : new Date(Date.now()* 160)
    })
    return response;
}
else {
    return NextResponse.json({
        success: false
    })
}


}