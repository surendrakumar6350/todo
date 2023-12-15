import { connectdb } from "@/helper/md";
import { NextResponse } from "next/server";
import { follow } from "@/helper/LikesSchema/FollowSchema/followschema";

export async function POST(request) {
    try {
const useridd = await request.cookies.get("user")
if(useridd?.value) {
    const userid = useridd.value
    const {profileid} = await request.json();
    await connectdb();
    const newfollow = new follow({
        userid,
        profileid
    })
    const ohk = await newfollow.save();
    console.log(ohk)
return NextResponse.json({
    success: true,
    message: "follow added in database",
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