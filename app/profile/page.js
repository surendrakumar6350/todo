"use client"
import React, { useEffect, useState } from 'react'
import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import { logout } from '@/helper/logoutfunction/logout';
import 'react-toastify/dist/ReactToastify.css';
import { httpAxios } from '@/helper/httpAxios';

const page =  () => {
const [data, setdata] = useState([])
const findingUserTasks =  ()=> {
const userTasks = fetch("https://todo-git-master-surendra-kumars-projects.vercel.app/api/findtask").then((Response)=> Response.json()).then((result)=> setdata(result.alltask))
}
useEffect(findingUserTasks,[])


const logoutr = ()=> {
  (async()=>{
    await logout()
    setTimeout(()=>{
      window.location.reload()
    }, 1000)
  })()
}
  return (
    <>
<Nav/>
<header>
<ToastContainer/>
<div className="container">

    <div className="profile">

        <div className="profile-image">

            <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""/>

        </div>

        <div className="profile-user-settings">

            <h1 className="profile-user-name">ankit jangir</h1>

            <button onClick={logoutr} className="btn profile-edit-btn">Log Out</button>

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
    return <div className="info-bar" key={e._id + "1"} >
    <div key={e._id + "2"}>
      <h2 key={e._id + "3"}>{e.title}</h2>
      <p key={e._id + "4"}>{e.text}</p>
    </div>
  </div>

  })}
<Footer/>

    </>
  )
}

export default page