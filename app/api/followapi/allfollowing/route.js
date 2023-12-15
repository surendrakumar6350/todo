import { follow } from "@/helper/LikesSchema/FollowSchema/followschema";
import { connectdb } from "@/helper/md";
import { NextResponse } from "next/server";


export async function POST(request) {
const {profileid} = await request.json();
await connectdb();
try {
    const alllikes = await follow.find({userid: profileid})
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