import { NextResponse } from "next/server";
import { task } from "@/helper/schema";
import { connectdb } from "@/helper/md";


export async function POST(request) {
    try {
        console.log("finding user tasks , api fired")
const usercookie = await request.cookies.get('user');
const userid = usercookie.value;
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