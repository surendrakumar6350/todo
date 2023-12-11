import { connectdb } from "@/helper/md"
import { task } from "@/helper/schema";
import { signup } from "@/helper/signupSchema/Schema";
import { NextResponse } from "next/server";


export async function  POST(request) {
    const userid = await request.json();
    const id = userid.id
try {
await connectdb();
const user = await signup.findOne({_id: id})
const usertask = await task.find({userid: id})
return NextResponse.json({
    user,
    usertask
})
}
catch (error) {
    console.log(error) 
    return NextResponse.json({
        success: false,
        message: "error in api"
    })
}
}