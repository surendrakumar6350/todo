import { Likes } from "@/helper/LikesSchema/LikesSchema";
import { connectdb } from "@/helper/md";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        const useridd = await request.cookies.get("user")
        if(useridd?.value) {
            const userid = useridd?.value
            const {postid} = await request.json();
            await connectdb();
            const ohk = await Likes.findOne({ $and: [ { userid }, { postid } ] })
            
            if(ohk == null) {
                return NextResponse.json(
                    {
                        success: false,
                        message: "post not liked by user"
                    }
                )
            }
            else {
                return NextResponse.json({
                    success: true,
                    message: "post already liked by user",
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