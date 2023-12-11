"use client"
import React, { useEffect, useState } from 'react'
import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { finduser } from '@/helper/userprofile/finduser';

const page =  ({params}) => {

  const [data, setdata] = useState([])
  const [userkanaam, setuserkanaam] = useState("Loading..")
  const [piclink, setpiclink] = useState("")
  const [length, setlength] = useState("0")
   
const userid = params.user;
const fnc = ()=> {
(async()=> {
const result = await finduser({id: userid})
const user = result.user
const usertask = result.usertask

setdata(usertask)
setuserkanaam(user.username)
setpiclink(user.picture || "https://img.freepik.com/free-photo/user-profile-icon-front-side_187299-39596.jpg?size=338&ext=jpg&ga=GA1.1.1803636316.1701216000&semt=ais")
setlength(usertask.length)
})()
}
useEffect(fnc,[])




  return (
    <>
<Nav/>
<header>
<ToastContainer/>
<div className="container">

    <div className="profile">

        <div className="profile-image">

            <img src={piclink} alt=""/>

        </div>

        <div className="profile-user-settings">

            <h1 className="profile-user-name">{userkanaam}</h1>

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