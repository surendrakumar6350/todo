"use client"
import { pinset } from '@/helper/pin/abc';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {
    const router = useRouter()
    const [data, setdata] = useState("")

const submited = ()=> {
    if(data == "2023") {
        (async()=> {
           await pinset();
           setTimeout(() => {
            router.push("/home")
           }, 1000);
           
        })()
        
        
    }
    else {
        alert("wrong pin")
    }
}

  return (
    <>
    <div style={{margin: "auto"}}>
        Enter Pin to access website

    </div>
    <input onChange={(e)=> setdata(e.target.value)} type='text'></input>
    <button onClick={submited}>submit</button>
    <br></br>
    <br></br>
    <br></br>
    <div>contact <a href='https://wa.me/7878842575'> admin </a> if you don't have pin</div>
    </>
  )
}

export default page