"use client"
import React, { useEffect, useState } from 'react'
import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import { logout } from '@/helper/logoutfunction/logout';
import 'react-toastify/dist/ReactToastify.css';
import { httpAxios } from '@/helper/httpAxios';
import { findalltask } from '@/helper/findtaskfunction/findusertask';
import { username } from '@/helper/findtaskfunction/findingname';

const page =  () => {
const [data, setdata] = useState([])
const [userkanaam, setuserkanaam] = useState("Loading..")
const [length, setlength] = useState("0")
 
const ankit = ()=> {
  (async()=>{
 const alltaska = await findalltask();
 setdata(alltaska.alltask)
})()
}
useEffect(ankit,[])

const logoutr = ()=> {
  (async()=>{
    await logout()
    setTimeout(()=>{
      window.location.reload()
    }, 1000)
  })()
}

const pankaj = ()=> {
  (async()=>{
const result = await username();
setuserkanaam(result)
  })()
}

useEffect(pankaj,[])
useEffect(()=> {
  setlength(data.length)
},[data])


  return (
    <>
<Nav/>
<header>
<ToastContainer/>
<div className="container">

    <div className="profile">

        <div className="profile-image">

            <img src="https://img.freepik.com/free-photo/user-profile-icon-front-side_187299-39596.jpg?size=338&ext=jpg&ga=GA1.1.1803636316.1701216000&semt=ais" alt=""/>

        </div>

        <div className="profile-user-settings">

            <h1 className="profile-user-name">{userkanaam}</h1>

            <button onClick={logoutr} className="btn profile-edit-btn">Log Out</button>

        </div>

        <div className="profile-stats">

            <ul>
                <li><span className="profile-stat-count">{length}</span> posts</li>
                <li><span className="profile-stat-count">0</span> followers</li>
                <li><span className="profile-stat-count">0</span> following</li>
            </ul>

        </div>

        <div className="profile-bio">

            <p><span className="profile-real-name">{userkanaam}</span> 🚀 Dreamer | 📚 Eternal Learner | ✨ Explorer of Ideas 

</p>

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