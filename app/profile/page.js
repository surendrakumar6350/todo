"use client"
import React, { useEffect, useState } from 'react'
import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import { logout } from '@/helper/logoutfunction/logout';
import 'react-toastify/dist/ReactToastify.css';
import { findalltask } from '@/helper/findtaskfunction/findusertask';
import { username } from '@/helper/findtaskfunction/findingname';
import { logoutsocial } from '@/helper/logoutfunction/logoutsocial';
import { Deletebutton } from '@/Components/Deletebutton';
import LikeCommentSection from '@/Components/LikeAndComment/LikeAndComment';
import { useRouter } from 'next/navigation';
const page =  () => {
  const router = useRouter();
const [data, setdata] = useState([])
const [userkanaam, setuserkanaam] = useState("Loading..")
const [piclink, setpiclink] = useState("")
const [length, setlength] = useState("0")
 



const ankit = ()=> {
  (async()=>{
 const alltaska = await findalltask();
 setdata(alltaska.alltask.reverse())

 const kk = await logoutsocial();
 if(kk) {
  console.log("auth token deleted")
 }
 else {
  console.log("failed to delete auth token")
 }
})()
}
useEffect(ankit,[])



const pankaj = ()=> {
  (async()=>{
const result = await username();
setuserkanaam(result.name)
setpiclink(result.picture)
  })()
}
useEffect(pankaj,[])
useEffect(()=> {
  setlength(data.length)
},[data])


const logoutr = ()=> {
  (async()=>{
    await logout()
    setTimeout(()=>{
      window.location.reload()
    }, 1000)
  })()
}

const deletepost = (id)=> {
setdata((prev) => prev.filter((todo) => todo._id !== id))
toast("Deleted Successfully!!!")
}
const Notdeleted = ()=> {
toast("Error in Post Deleting..")
}
console.log(data)

const editprofile = ()=> {
  router.push("/editprofile")
}
  return (
    <>
<Nav/>
<header>
<ToastContainer/>
<div className="container">

    <div className="profile">

        <div className="profile-image">
<div className='setpic' style={{backgroundImage: `url('${piclink}')`, borderRadius: "50%", backgroundPosition: "center", backgroundSize: "cover"}}></div>


        </div>

        <div className="profile-user-settings">

            <h1 className="profile-user-name">{userkanaam}</h1>

            <button onClick={logoutr} className="btn profile-edit-btn">Log Out</button>
            <button onClick={editprofile} className="btn profile-edit-btn">Edit Profile</button>

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
    return <div style={{marginBottom: "30px"}}><div className="info-bar" key={e._id + "1"} >
    <div key={e._id + "2"}>
      <h2 key={e._id + "3"}>{e.title}</h2>
      <p key={e._id + "4"}>{e.text}</p>
    </div>
    <Deletebutton Notdeleted={Notdeleted} delete={deletepost} id={e._id}/>
  </div>
  <LikeCommentSection key={e._id} data={{...e}}/>
  </div>
  })}
<Footer />
    </>
  )
}

export default page