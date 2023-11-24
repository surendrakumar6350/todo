import { connectdb } from "@/helper/md";
import { task } from "@/helper/schema";
import { NextResponse } from "next/server";
export async function POST(request) {
    const usercookie = request.cookies.get("user")
    const id = usercookie.value;
    try {
connectdb();


const {title, text} = await request.json();
const newtask = new task({
    title,
    text,
    userid: id
})
const ohk = await newtask.save();
console.log(ohk)
return NextResponse.json({
    message:"task created",
    success:true
})
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "api error",
            success: false
        })
    }

}