import { connectdb } from "@/helper/md";
import { NextResponse } from "next/server";
import { signup } from "@/helper/signupSchema/Schema";
import nodemailer from 'nodemailer'
import { otp } from "@/helper/signupSchema/otpSchema";

export async function POST(request) {
    const {username, email, password} = await request.json();
    try {
        connectdb();
        const find = await signup.findOne({email})
        if(find) {
            return NextResponse.json({
                message: "phale se h",
                success: "already"
            })
        }
        else {

          var pass = "";
          var i =0;
          for(i=0; i<4; i++) {
            pass += Math.floor(Math.random()*10)
          }

            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: "papa.kaa.dinosaur@gmail.com",
                  pass: "jele zgqt akkd goya",
                },
              });
              async function main() {
                const info = await transporter.sendMail({
                  from: 'papa.kaa.dinosaur@gmail.com', 
                  to: `${email}`,
                  subject: `Hii ${username}  verify your email`, 
                  text: "", 
                  html: `<div style="max-width: 400px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                  <h2 style="color: #333; margin-bottom: 20px;">OTP Verification</h2>
                  <p style="color: #666;">Dear User,<br> ${username}</p>
                  <p style="color: #666;">Your One-Time Password (OTP) for verification is:</p>
          
                  <div style="background-color: #e0e0e0; padding: 10px; border-radius: 5px; font-size: 20px; margin: 20px 0;">
                      <strong style="color: #333;">${pass}</strong> 
                  </div>
          
                  <p style="color: #666;">Please enter this OTP on the website to complete the verification process.</p>
          
                  <p style="color: #666;">If you didn't request this verification, please ignore this email.</p>
          
                  <p style="color: #666;">Best regards,<br>surendra kumar</p>
              </div>`, 
                });
               return info
              }
              await connectdb();
       const newotp = new otp({
        email,
        otp: pass,
       });
       const ohk =  await newotp.save();
        const rr =   await main().catch((error)=> {
                return NextResponse.json({
                    success: false
                })
              })
            
              return NextResponse.json({
                success: true,
                otpid: ohk._id,
                message: rr.messageId
                
            })


   
       
    }
    }
    catch (error) {
        return NextResponse.json({
            success: false
        })
    }
}