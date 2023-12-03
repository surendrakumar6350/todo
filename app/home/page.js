"use client"
import React, { useEffect, useState } from 'react'
import { allUsersTasks } from '@/helper/homefunction/homes'
import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'
const page = () => {
  const [data, setdata] = useState([])
 const [dataloding, setdataloding] = useState({
  display: "block"
 })
  const rahul = ()=> {
    setTimeout(() => {
      (async()=> {
        const all = await allUsersTasks();
        setdataloding({
          display: "none"
        })
        setdata(all.data.alldata)
            })()
    }, 2000);
  }
  useEffect(rahul,[])


  return (
    <>
    <Nav/>
    
      {data?.map((e)=> {
 return <div className="info-bar" key={e._id + "1"}>
          <div key={e._id + "2"}>
            <h2 key={e._id + "3"}>{e.title}</h2>
            <p key={e._id + "4"}>{e.text}</p>
          </div>
          <pre className='name'>By: {e.name}</pre>
        </div>
  })}


<div id="load" style={dataloding}>
  <div>G</div>
  <div>N</div>
  <div>I</div>
  <div>D</div>
  <div>A</div>
  <div>O</div>
  <div>L</div>
</div>
  <Footer/>
    </>
  )
}

export default page