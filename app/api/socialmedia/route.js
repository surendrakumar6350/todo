import { connectdb } from "@/helper/md";
import { signup } from "@/helper/signupSchema/Schema";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {email, sub, picture, name} = await request.json();
       try {
         await connectdb();
        const find = await signup.findOne({sub: sub})
        if(find) {
            const response = NextResponse.json({
                message: "already saved",
                success: true,
                id : find._id,
                email: find.email,
            })
            response.cookies.set("user", find._id, {
                expires : new Date(Date.now()* 160)
            })
            return response;
        }
        else {
            const newuser = new signup({
                username : name,
                email: email,
                sub: sub,
                picture: picture
               });
               const ohk = await newuser.save();
               const response = NextResponse.json({
                success: true,
                message: "data saved",
                id: ohk._id
            })
            response.cookies.set("user", ohk._id, {
                expires : new Date(Date.now()* 160)
            })
            return response;
        }

       }
       catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: "error in api"
        })
       }
}