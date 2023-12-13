import { Likes } from "@/helper/LikesSchema/LikesSchema";
import { connectdb } from "@/helper/md";
import { NextResponse } from "next/server";


export async function POST(request) {
const {postid} = await request.json();
await connectdb();
try {
    const alllikes = await Likes.find({postid})
    return NextResponse.json({
        success: true,
        message: alllikes
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