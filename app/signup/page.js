"use client";
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import { makeuser } from '@/helper/signupSchema/callapi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const page =  () => {
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
      if(ress === "already") {
        toast("email already exists")
      }
      else if (ress === false) {
        toast("failed to create")
      }
      else if( ress === true) {
        toast("user created now you can login")
        router.push("/login")
      }
      
    }
  };

  return (
    <>
    <Nav/>
    <ToastContainer />
      <div className="signup-container">
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

<Footer/>
    </>
  );
}
export default page
