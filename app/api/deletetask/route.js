import { connectdb } from "@/helper/md";
import { task } from "@/helper/schema";
import { NextResponse } from "next/server";



export async function POST(request) {
   await connectdb();
   const taskid = await request.json();
   const {id} = taskid
   try {
const taskk = await task.deleteOne({ _id: id})
return NextResponse.json({
    success: true
})

   }
   catch (error) {
    console.log(error);
    return NextResponse.json({
        success: false,
        message: "error in api"
    })
   }
}