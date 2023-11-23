"use client"
import React from 'react'
import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'
import { useRouter } from 'next/navigation'
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

    try{
      document.cookie = await `user=null; expires=${new Date(Date.now())};`
      toast("logout successful")
      await  setTimeout(()=>{
        window.location.reload()
      }, 1000)
    }
catch (error) {
  console.log(error)
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