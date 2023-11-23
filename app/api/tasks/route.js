import { connectdb } from "@/helper/md";
import { task } from "@/helper/schema";
import { NextResponse } from "next/server";
import {cookies} from 'next/headers'
export async function POST(request) {
    try {
connectdb();
const mil = cookies();
    const result = mil.get('user')
const {title, text} = await request.json();
const newtask = new task({
    title,
    text,
    userid: result.value
})
const ohk = await newtask.save();
console.log(ohk)
return NextResponse.json({
    message:"task created",
    success:true
})
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "api error",
            success: false
        })
    }

}