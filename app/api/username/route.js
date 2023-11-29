import { connectdb } from "@/helper/md"
import { signup } from "@/helper/signupSchema/Schema"
import { NextResponse } from "next/server"


export async function POST(request) {
    try {
const result = await request.cookies.get("user")
await connectdb();
const finduer = await signup.findById({_id: result.value})
return NextResponse.json({
    success: true,
    name: finduer.username
})
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false
        })
    }
}