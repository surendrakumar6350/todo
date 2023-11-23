import { connectdb } from "@/helper/md";
import { NextResponse } from "next/server";
import { signup } from "@/helper/signupSchema/Schema";

export async function POST(request) {
    const {username, email, password} = await request.json();
    try {
        connectdb();
        const find = await signup.findOne({email})
        if(find) {
            return NextResponse.json({
                message: "phale se h",
                success: "already"
            })
        }
        else {
       connectdb();
       const newuser = new signup({
        username,
        email,
        password
       });
       const ohk =  await newuser.save();
        return NextResponse.json({
            success: true
        })
       
    }
    }
    catch (error) {
        return NextResponse.json({
            success: false
        })
    }
}