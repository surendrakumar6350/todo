import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const response = NextResponse.json({
            message:"logout true",
            success: true
        })
        response.cookies.set("appSession", null, {
            expires: new Date(Date.now())
        })
        return response;
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"api error",
            success:false
        })
    }
}