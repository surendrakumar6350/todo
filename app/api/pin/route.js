import { NextResponse } from "next/server";

export async function POST() {
    const response = NextResponse.json({
        cookie: "cookie stated succesfully",
        success: true
    })
    response.cookies.set("pin", "pin");
    return response
}