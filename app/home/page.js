"use client"
import React, { useEffect, useState } from 'react'
import { allUsersTasks } from '@/helper/homefunction/homes'
import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'
const page = () => {
  const [data, setdata] = useState([])
 const [dataloding, setdataloding] = useState({
  display: "flex"
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

<div className='animation' style={dataloding}>
<div class="lds-roller" ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
      
  <Footer/>
    </>
  )
}

export default page