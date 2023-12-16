import { NextResponse } from "next/server";
import { task } from "@/helper/schema";
import { connectdb } from "@/helper/md";
import { signup } from "@/helper/signupSchema/Schema";

export async function POST(request) {
    try {
    const {comment, postid} = await request.json();

const usercookie = await request.cookies.get('user');
const userid = usercookie?.value;
if(userid) {
    await connectdb();

const finduer = await signup.findById({_id: userid})
const photo = finduer.picture || "https://img.freepik.com/free-photo/user-profile-icon-front-side_187299-39596.jpg?size=338&ext=jpg&ga=GA1.1.1803636316.1701216000&semt=ais";
const name = finduer.username
const notify = "Not current details may be changed"

const post = await task.findOne({_id: postid})
const commet = post.comment
const newcommet = [...commet, {userid, comment, photo: photo, name: name, notify}]
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