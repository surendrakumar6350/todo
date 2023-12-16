import { NextResponse } from "next/server";
import { task } from "@/helper/schema";
import { connectdb } from "@/helper/md";


export async function POST(request) {
    try {
        const {postid} = await request.json();
await connectdb();
const alltask = await task.findOne({_id: postid})
const allcomments = await alltask.comment
return NextResponse.json({
    allcomments
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