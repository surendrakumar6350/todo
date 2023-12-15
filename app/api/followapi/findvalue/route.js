
import { follow } from "@/helper/LikesSchema/FollowSchema/followschema";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
const useridd = await request.cookies.get("user")
if(useridd?.value) {
    const userid = useridd.value
    const follower = await follow.find({profileid: userid})
    const following = await follow.find({userid: userid})
return NextResponse.json({
    success: true,
    follower,
    following
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