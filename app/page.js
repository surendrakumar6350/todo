"use client"
import React from 'react'
import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'
import { useRouter } from 'next/navigation'
import { logoutw } from '@/helper/logout/logoutfunction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const page = () => {
  const router = useRouter();
  const clicked = ()=> {
    router.push("/tasks")
  }
  const sig = ()=> {
    router.push("/signup")
  }
  const log = ()=> {
    router.push("/login")
  }

  const logout = async ()=> {
   const result = await  logoutw();
   if(result.data.success) {
    router.push("/login")
   }
   else {
    toast("error in logout")
   }
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
        <button onClick={logout}>log Out</button>
    </section>
   <Footer/>
   </>
  )
}

export default page