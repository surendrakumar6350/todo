"use client";
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import { makeuser } from '@/helper/signupSchema/callapi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { matchkro } from '@/helper/signupSchema/matchotp';;

export const page =  () => {
  const [ootp, setootp] = useState();
  const [id , setid] = useState("")
  const [style ,setstyle] = useState({})
  const [style2, setstyle2] = useState({
    display: "none"
  })
  const router = useRouter();
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: ""
  });

  const clicked = async (event) => {
    event.preventDefault();
    if (data.username.length <= 3) {
      toast("username is too short");
    }
    else if(data.password.length <= 5) {
      toast("password is too short")
    }
    else {
const result = await makeuser(data);
const ress = result.data.success
setid(result.data.otpid)
if(ress === "already") {
  toast("email already exists")
}
else if (ress === false) {
  toast("failed to send otp")
  toast("enter a valid email")
}
else if( ress === true) {
  setstyle({
    display: "none"
  })
  setstyle2({
    display: "block"
  })
toast(`otp sent to ${data.email}`)
   }

    }
  }


  const otp = ()=> {
    (async()=>{
     const result12 = await matchkro({id: id, ootp: ootp, username:data.username, email: data.email, password: data.password})
     if(result12.data.success == true) {
      toast("otp matched")
      await setTimeout(()=>{
        toast("signup successful")
        router.push("/profile")
      }, 2000)
      
     }
     else {
      toast("wrong otp")
     }
    })()
  }




      
   

  return (
    <>
    <Nav/>
    <ToastContainer />
      <div style={style} className="signup-container">
        <h2>Sign Up</h2>
        <form method="post">
          <label htmlFor="username">Username</label>
          <input value={data.username} type="text" id="username" name="username" onChange={(e) => setdata({
            ...data,
            username: e.target.value
          })} required />

          <label htmlFor="email">Email</label>
          <input value={data.email} type="email" id="email" name="email" onChange={(e) => setdata({
            ...data,
            email: e.target.value
          }
          )} required />

          <label htmlFor="password">Password</label>
          <input value={data.password} type="password" id="password" name="password" onChange={(e) => setdata({
            ...data,
            password: e.target.value
          }
          )} required />

          <button onClick={clicked} type="submit">Sign Up</button>
        </form>

        <div className="signup-link">
          Already have an account? <Link href="/login">Log In</Link>
        </div>
      </div>



      <div style={style2} className="otp-container animated">
        <label htmlFor="otp">Enter OTP:</label>
        <input className='inputj' type="text" id="otp" onChange={(e)=> setootp(e.target.value)} name="otp" placeholder="Enter your OTP" required/>
        <button onClick={otp} className='buttonj'>Verify OTP</button>
    </div>

   


<Footer/>
    </>
  );
}
export default page
