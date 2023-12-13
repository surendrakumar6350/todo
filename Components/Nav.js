
"use client"
import { CiMenuBurger } from "react-icons/ci";
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../Image/logo.svg'
import Link from 'next/link'

const Nav = () => {
  const [what, setwhat] = useState(true)
  const show = ()=> {
    if(what) {
    const result = document.getElementById("ulkiid")
    result.style.display = "block"
    setwhat((pre)=> !pre)
    console.log(what)
    }
    else {
      const result = document.getElementById("ulkiid")
    result.style.display = "none"
    setwhat((pre)=> !pre)
    console.log(what)
    }
  }
  return (
    <>
    <nav>
    <Image src={logo} alt="Logo" className="logo" />
    <img src="https://static.wikia.nocookie.net/6a181c72-e8bf-419b-b4db-18fd56a0eb60"  width="80px" />
    <div className="optionswith">
      <Link href="/">Home</Link>
      <Link href="/tasks">New Post</Link>
      <Link href="/profile">My Profile</Link>
      <Link href="/privacy-and-policy">privacy and policy</Link>
      <CiMenuBurger onClick={show} className="iconreact" />
      <ul id="ulkiid">
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/tasks">New Post</Link></li>
        <li><Link href="/profile">My Profile</Link></li>
        <li><Link href="/editprofile">Edit Profile</Link></li>
        <li><Link href="/privacy-and-policy">privacy and policy</Link></li>
      </ul>
    </div>
  </nav>
    </>
  )
}

export default Nav