import { NextResponse } from "next/server";
import { task } from "@/helper/schema";
import { connectdb } from "@/helper/md";


export async function POST(request) {
    try {
    const {comment, postid} = await request.json();

const usercookie = await request.cookies.get('user');
const userid = usercookie?.value;
if(userid) {
    await connectdb();
const post = await task.findOne({_id: postid})
const commet = post.comment
const newcommet = [...commet, {userid, comment}]
 await task.updateOne({_id: postid},{$set:{comment: newcommet}})
 return NextResponse.json({
    success: true
 })
}
else {
    return NextResponse.json({
        message: "login first",
        success: false
    })
}
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: "api error"
        })
    }
}