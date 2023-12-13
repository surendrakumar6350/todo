import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'
import { signup } from '@/helper/signupSchema/Schema';
import { connectdb } from '@/helper/md';


export async function POST(request) {
try {
    const usercookie = await request.cookies.get('user');
    const userid = usercookie.value;

    if (userid) {
        const data = await request.formData()
        const file = data.get('file')

        if (!file) {
            return NextResponse.json({ success: false })
        }



        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const path = `tmp/${file.name}`;
        await writeFile(path, buffer)

        cloudinary.config({
            cloud_name: 'drlyu0rbn',
            api_key: '235884574929583',
            api_secret: '1ttLtXdkenqCjDd82mw_aJto-EY',
            secure: true
        });
        cloudinary.uploader
            .upload(`tmp/${file.name}`)
            .then(async(result)=> {
                console.log(result)
                await connectdb()
                const ankit = await signup.updateOne({_id: userid},{$set:{picture: result.url}})
                console.log(ankit)
            });

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