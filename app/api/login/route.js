import { signup } from "@/helper/signupSchema/Schema";
import { NextResponse } from "next/server";
import { connectdb } from "@/helper/md";

export async function POST(request) {
    await connectdb();
    const {email, password} = await request.json();
   try {
    
        const find = await signup.findOne({
            email:email
        })
        if(find === null) {
        return NextResponse.json({
            message:"email not found",
            success: false
        }) }
        else {
           if(find.password === password) {
            
            const response = NextResponse.json({
                message: "logined",
                success: true,
                id : find._id,
                email: find.email,
            })
            response.cookies.set("user", find._id, {
                expires : new Date(Date.now()* 160),
                httpOnly: true
            })
            return response;
           }
           else if (find.password != password) {
            return NextResponse.json({
                message: "password not matched",
                success: false
            })
           }
        }
    


    }
        
   catch (error) {
    console.log(error);
    return NextResponse.json({
        message:"api error",
        success: false
    })
   }

}