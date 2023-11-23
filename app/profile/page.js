"use client"
import React, { useEffect, useState } from 'react'
import ankit from '@/helper/findingtasks/find'
import { name } from '../api/findname/printname'
import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'

const page = () => {
  const [data, setdata] = useState([]);
  const [naam, setnaam] = useState("");
  const rahul =  ()=> {
    ankit().then((Response)=> {setdata(Response)})
    name().then((Response)=> {setnaam(Response)})
  }
useEffect(rahul,[])

  return (
    <>
<Nav/>
<header>

<div className="container">

    <div className="profile">

        <div className="profile-image">

            <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""/>

        </div>

        <div className="profile-user-settings">

            <h1 className="profile-user-name">{naam}</h1>

            <button className="btn profile-edit-btn">Edit Profile</button>

            <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>

        </div>

        <div className="profile-stats">

            <ul>
                <li><span className="profile-stat-count">164</span> posts</li>
                <li><span className="profile-stat-count">188</span> followers</li>
                <li><span className="profile-stat-count">206</span> following</li>
            </ul>

        </div>

        <div className="profile-bio">

            <p><span className="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>

        </div>

    </div>
</div>
</header>


  {data?.map((e)=> {
    return <div className="info-bar">
    <div>
      <h2>{e.title}</h2>
      <p>{e.text}</p>
    </div>
  </div>

  })}
<Footer/>

    </>
  )
}

export default page