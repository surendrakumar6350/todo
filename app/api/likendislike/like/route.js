import { connectdb } from "@/helper/md";
import { NextResponse } from "next/server";
import { Likes } from "@/helper/LikesSchema/LikesSchema";

export async function POST(request) {
    try {
const useridd = await request.cookies.get("user")
if(useridd.value) {
    const userid = useridd.value
    const {postid} = await request.json();
    await connectdb();
    const newlike = new Likes({
        userid,
        postid
    })
    const ohk = await newlike.save();
    console.log(ohk)
return NextResponse.json({
    success: true,
    message: "like added in database",
    obj: ohk
})

}
else {
    return NextResponse.json({
        success: false,
        message: "login first"
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