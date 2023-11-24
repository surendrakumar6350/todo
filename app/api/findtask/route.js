import { NextResponse } from "next/server";
// import {cookies} from 'next/headers'
import { task } from "@/helper/schema";
import { connectdb } from "@/helper/md";


export async function GET(request) {
    try {
        console.log("api fired")
const usercookie = await request.cookies.get("user");
const userid = usercookie?.value
await connectdb();
const alltask = await task.find({userid: userid})
return NextResponse.json({
    alltask
})
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"api error",
            success: false
        })
    }
}