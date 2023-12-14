import { NextResponse } from "next/server";
import { Likes } from "@/helper/LikesSchema/LikesSchema";
import { connectdb } from "@/helper/md";

export async function POST(request) {
    const useridd = await request.cookies.get("user")
    try {
    if(useridd?.value) {
        const userid = useridd?.value
        const {postid} = await request.json();
        await connectdb();
        const newlike = await Likes.deleteOne({userid, postid})
        console.log(newlike)

    return NextResponse.json({
        success: true,
        message: "deleted form database",
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