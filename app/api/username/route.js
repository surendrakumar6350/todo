import { connectdb } from "@/helper/md"
import { signup } from "@/helper/signupSchema/Schema"
import { NextResponse } from "next/server"


export async function POST(request) {
    try {
const result = await request.cookies.get("user")
await connectdb();
const finduer = await signup.findById({_id: result.value})
const photo = finduer.picture || "https://img.freepik.com/free-photo/user-profile-icon-front-side_187299-39596.jpg?size=338&ext=jpg&ga=GA1.1.1803636316.1701216000&semt=ais";
return NextResponse.json({
    success: true,
    name: finduer.username,
    picture: photo
})
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false
        })
    }
}