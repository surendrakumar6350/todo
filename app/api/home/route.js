import { task } from "@/helper/schema";
import { connectdb } from "@/helper/md";
import { NextResponse } from "next/server";

export async function GET() {
    try {
       await connectdb();
       const alldata = await task.find({"__v":"0"})
       return NextResponse.json({alldata})
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            success:false
        })
    }
}
