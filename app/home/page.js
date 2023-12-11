"use client"
import React, { useEffect, useState } from 'react'
import { allUsersTasks } from '@/helper/homefunction/homes'
import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'
import Click from './Click'
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
        const alll = await all.data.alldata.reverse();
        setdata(alll)
            })()
    }, 800);
  }
  useEffect(rahul,[])


  return (
    <>
    <Nav/>
    
      {data?.map((e)=> {
 return <div style={{padding: "0px 10px"}} className="info-bar" key={e._id + "1"}> 
          <div key={e._id + "2"}>
            <h2 key={e._id + "3"}>{e.title}</h2>
            <p key={e._id + "4"}>{e.text}</p>
          </div>
          <div className='homediv' style={{width: '60px'}}>
          <Click uerid={e.userid}/>
          <pre className='name'>By: {e.name}</pre>
          </div>
        </div>
  })}

<div className='animation' style={dataloding}>
<div className="lds-roller" ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
      
  <Footer/>
    </>
  )
}

export default page