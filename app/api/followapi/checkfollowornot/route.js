import { follow } from "@/helper/LikesSchema/FollowSchema/followschema";
import { connectdb } from "@/helper/md";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        const useridd = await request.cookies.get("user")
        if(useridd?.value) {
            const userid = useridd?.value
            const {profileid} = await request.json();
            await connectdb();
            const ohk = await follow.findOne({ $and: [ { userid }, { profileid } ] })
            
            if(ohk == null) {
                return NextResponse.json(
                    {
                        success: false,
                        message: "Not follow by user"
                    }
                )
            }
            else {
                return NextResponse.json({
                    success: true,
                    message: "Already followed by user",
                    obj: ohk
                })
            }
        
        
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