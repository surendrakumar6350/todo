"use client"
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import { loginapi } from '@/helper/loginSchema/apicall'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const page = () => {
    const [signuu, setsignuu] = useState("Continue")
    const router = useRouter();
    const [data, setdata] = useState({
        email: "",
        password: ""
    })
    const clicked = async (event)=> {
        event.preventDefault();
        setsignuu("please wait")
        if(data.email.length <= 2) {
            toast("email is too short")
            setsignuu("Continue")
        }
        else if (data.password.length <= 5) {
            toast("password is too short")
            setsignuu("Continue")
        }
        else {
            console.log("going to call http axios")
        const result = await loginapi(data);
        console.log(result)
        if(result.message == "email not found") {
            toast("email not found")
            setsignuu("Continue")
        }
        else if (result.message == "password not matched") {
            toast("password not matched")
            setsignuu("Continue")
        }
        else if (result.success === true) {
            setsignuu("Continue")
            toast("login successful")
            await  setTimeout(()=>{
                window.location.reload()
              }, 1000) 
        }
        else if(result.success === false) {
            toast("failed to login")
            setsignuu("Continue")
        }
        }
    }
  return (
    <>
    <Nav/>
    <ToastContainer />
    <div className="containera">
        <form className="form" id="login">
            <h1 className="form__title">Login</h1>
            <div className="form__message form__message--error"></div>
            <div className="form__input-group">
                <input value={data.email} onChange={(e)=> {setdata({...data, email: e.target.value})}} type="text" className="form__input"  placeholder="Email"/>
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input value={data.password} onChange={(e)=> {setdata({...data, password: e.target.value})}} type="password" className="form__input"  placeholder="Password"/>
                <div className="form__input-error-message"></div>
            </div>
            <button className="form__button" onClick={clicked} type="submit">{signuu}</button>
            <p className="form__text">
            </p>
            <p className="form__text">
                <Link className="form__link" href="/signup" id="linkCreateAccount">Don't have an account? Create account</Link>
            </p>
        </form>
       
    </div>
 <Footer/>
    
    </>
  )
}

export default page