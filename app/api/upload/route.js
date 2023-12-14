
import { NextRequest, NextResponse } from 'next/server'
import { signup } from '@/helper/signupSchema/Schema';
import { connectdb } from '@/helper/md';


export async function POST(request) {
    const {newurl} = await request.json();
try {
    const usercookie = await request.cookies.get('user');
    const userid = usercookie?.value;

    if (userid) {
       
                await connectdb()
                const ankit = await signup.updateOne({_id: userid},{$set:{picture: newurl}})
                
        return NextResponse.json({ success: true })



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