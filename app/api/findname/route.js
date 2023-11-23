import { connectdb } from "@/helper/md";
import {cookies} from 'next/headers'
import { signup } from "@/helper/signupSchema/Schema";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const coo = cookies();
        const result = coo.get('user')
        const id =  result.value;
        await connectdb();
        const user = await signup.find({_id: id})
        return NextResponse.json(user)
}
catch (error) {
    console.log(error)
}
}