"use client"
import React, { useEffect, useState } from 'react'
import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '@auth0/nextjs-auth0/client';
import { sociallogin } from '@/helper/homefunction/sociallogin'
import Image from 'next/image'


const page = () => {
   const router = useRouter();
  const { user, error, isLoading } = useUser();
 
    if(user) {
      (async()=> {
      const result = await sociallogin(user)
      if(result.data.success == true) {
        router.push("/profile")
      }
      if(result.data.success == false) {
        toast('failed to login')
      }
      })()
  }
  
   
  const clicked = ()=> {
    router.push("/home")
  }
  const sig = ()=> {
    router.push("/signup")
  }
  const log = ()=> {
    router.push("/login")
  }
  return (
   <>
   <Nav/>
   <ToastContainer />
    <section className="hero">
        <h1>Welcome to Your Task Management Hub</h1>
        <p>Effortlessly organize your tasks and boost your productivity with our powerful todo manager.</p>
        <button onClick={clicked}>Get Started</button>
        <button onClick={sig}>Sign Up</button>
        <button onClick={log}>Log In</button>
    </section>

   <Footer/>
   </>
  )
}
export default page